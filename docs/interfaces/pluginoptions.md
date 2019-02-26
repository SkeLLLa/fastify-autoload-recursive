[fastify-autoload-recursive](../README.md) > [PluginOptions](../interfaces/pluginoptions.md)

# Interface: PluginOptions

## Hierarchy

**PluginOptions**

## Index

### Properties

* [autoPrefix](pluginoptions.md#autoprefix)
* [dir](pluginoptions.md#dir)
* [ignorePattern](pluginoptions.md#ignorepattern)
* [options](pluginoptions.md#options)
* [optionsPattern](pluginoptions.md#optionspattern)
* [prefix](pluginoptions.md#prefix)
* [schemaPattern](pluginoptions.md#schemapattern)

---

## Properties

<a id="autoprefix"></a>

### `<Optional>` autoPrefix

**● autoPrefix**: *`undefined` \| `false` \| `true`*

*Defined in plugin.ts:10*

Autoprefix all plugins according to parent directory

*__default__*: false

___
<a id="dir"></a>

###  dir

**● dir**: *`string`*

*Defined in plugin.ts:5*

Plugins directory

___
<a id="ignorepattern"></a>

### `<Optional>` ignorePattern

**● ignorePattern**: *`RegExp`*

*Defined in plugin.ts:14*

File pattern to exclude from registering

___
<a id="options"></a>

### `<Optional>` options

**● options**: *`undefined` \| `object`*

*Defined in plugin.ts:29*

Options to pass to plugins

*__default__*: {}

___
<a id="optionspattern"></a>

### `<Optional>` optionsPattern

**● optionsPattern**: *`RegExp`*

*Defined in plugin.ts:24*

Pattern for files containing options (will extend `options`)

*__default__*: /options?.(j\|t)s$/i

___
<a id="prefix"></a>

### `<Optional>` prefix

**● prefix**: *`undefined` \| `string`*

*Defined in plugin.ts:34*

Add prefix to all routes

*__default__*: ''

___
<a id="schemapattern"></a>

### `<Optional>` schemaPattern

**● schemaPattern**: *`RegExp`*

*Defined in plugin.ts:19*

Pattern for files containing schemas (will register before others)

*__default__*: /schemas?.(j\|t)s$/i

___

