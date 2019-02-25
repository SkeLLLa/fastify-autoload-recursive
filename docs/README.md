
#  fastify-autoload-recursive

## Index

### Modules

* ["fastify"](modules/_fastify_.md)

### Interfaces

* [PluginOptions](interfaces/pluginoptions.md)

### Variables

* [existsAsync](#existsasync)
* [readdirAsync](#readdirasync)
* [statAsync](#statasync)

### Functions

* [fastifyAutoLoadRecursivePlugin](#fastifyautoloadrecursiveplugin)

---

## Variables

<a id="existsasync"></a>

### `<Const>` existsAsync

**● existsAsync**: *`__promisify__`* =  promisify(exists)

*Defined in index.ts:11*

___
<a id="readdirasync"></a>

### `<Const>` readdirAsync

**● readdirAsync**: *`__promisify__`* =  promisify(readdir)

*Defined in index.ts:9*

___
<a id="statasync"></a>

### `<Const>` statAsync

**● statAsync**: *`__promisify__`* =  promisify(stat)

*Defined in index.ts:10*

___

## Functions

<a id="fastifyautoloadrecursiveplugin"></a>

### `<Const>` fastifyAutoLoadRecursivePlugin

▸ **fastifyAutoLoadRecursivePlugin**(fastify: *`FastifyInstance`*, pluginOptions: *[PluginOptions](interfaces/pluginoptions.md)*): `Promise`<`void`>

*Defined in index.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fastify | `FastifyInstance` |
| pluginOptions | [PluginOptions](interfaces/pluginoptions.md) |

**Returns:** `Promise`<`void`>

___

