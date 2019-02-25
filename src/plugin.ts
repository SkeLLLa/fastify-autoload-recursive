export interface PluginOptions {
  /**
   * Plugins directory
   */
  dir: string;
  /**
   * Autoprefix all plugins according to parent directory
   * @default false
   */
  autoPrefix?: boolean;
  /**
   * File pattern to exclude from registering
   */
  ignorePattern?: RegExp;
  /**
   * Pattern for files containing schemas (will register before others)
   * @default /schemas?.(j|t)s$/i
   */
  schemaPattern?: RegExp;
  /**
   * Pattern for files containing options (will extend `options`)
   * @default /options?.(j|t)s$/i
   */
  optionsPattern?: RegExp;
  /**
   * Options to pass to plugins
   * @default {}
   */
  options?: {[key: string]: any};
}
