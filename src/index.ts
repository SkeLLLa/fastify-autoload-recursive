import {Server, IncomingMessage, ServerResponse} from 'http';
import path from 'path';
import {promisify} from 'util';
import {readdir, stat, exists} from 'fs';
import {FastifyInstance, Plugin} from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import {PluginOptions} from './plugin';

const readdirAsync = promisify(readdir);
const statAsync = promisify(stat);
const existsAsync = promisify(exists);

declare module 'fastify' {
  interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse
  > {
    autoLoadRecursive: any;
  }
}

const fastifyAutoLoadRecursivePlugin: Plugin<
  Server,
  IncomingMessage,
  ServerResponse,
  PluginOptions
> = async function fastifyAutoloadRecursive(
  fastify: FastifyInstance,
  pluginOptions: PluginOptions
) {
  const {
    dir,
    prefix,
    autoPrefix,
    ignorePattern,
    schemaPattern = /schemas?.(j|t)s$/i,
    optionsPattern = /options?.(j|t)s$/i,
    options,
  } = pluginOptions;

  function sortFiles(f1: string, f2: string): number {
    const f1Type = schemaPattern.test(f1) ? 0 : 1;
    const f2Type = schemaPattern.test(f2) ? 0 : 1;
    return f1Type - f2Type;
  }

  function ignoreFilter(f: string): boolean {
    return ignorePattern ? !ignorePattern.test(f) : true;
  }

  function optionFilesFilter(f: string): boolean {
    return optionsPattern.test(f);
  }

  function pluginFilesFilter(f: string): boolean {
    return !optionsPattern.test(f);
  }

  async function handleDirectory(dirPath: string, parentPrefix = '') {
    const files = await readdirAsync(dirPath);
    const cleanFiles = files.filter(ignoreFilter);
    const optionFiles = cleanFiles.filter(optionFilesFilter);
    const routeFiles = cleanFiles.filter(pluginFilesFilter).sort(sortFiles);

    const dynamicOptions = Object.assign({}, options);
    for (const f of optionFiles) {
      const fPath = path.join(dirPath, f);
      const opts = require(fPath);

      Object.assign(
        dynamicOptions,
        typeof opts === 'function' ? opts.call(fastify, fastify, options) : opts
      );
    }

    const dirName = path.basename(dirPath);
    const prefix =
      dirName === path.basename(dir)
        ? parentPrefix
        : [parentPrefix, dirName].join('/');

    for (const f of routeFiles) {
      const fPath = path.join(dirPath, f);
      const isSchema = schemaPattern.test(fPath);
      const s = await statAsync(fPath);
      if (s.isFile() && path.extname(f) === '.js') {
        const plugin = require(fPath);
        const pluginOpts = {};
        autoPrefix || plugin.autoPrefix
          ? Object.assign(
              pluginOpts,
              {prefix: isSchema ? prefix.split('/').join('.') : prefix},
              dynamicOptions
            )
          : Object.assign(pluginOpts, dynamicOptions);
        fastify.register(plugin, pluginOpts);
      }
      if (s.isDirectory()) {
        await handleDirectory(fPath, prefix);
      }
    }
  }

  if (await existsAsync(dir)) {
    await handleDirectory(dir, prefix);
  }
};

export = fastifyPlugin(fastifyAutoLoadRecursivePlugin, {
  fastify: '>=1.0.0',
  name: 'fastify-autoload-recursive',
});
