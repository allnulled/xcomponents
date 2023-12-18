# xcomponents


**xcomponents** is a shorter & simpler substitute for HTML syntax.

![Shield](https://img.shields.io/badge/Set_of_components-+20-green) ![Shield](https://img.shields.io/badge/HTML_substitute-optionally-green) ![Shield](https://img.shields.io/badge/Supports_es6_import_syntax-yes-green) ![Shield](https://img.shields.io/badge/Supports_es5_require_syntax-yes-green) ![Shield](https://img.shields.io/badge/Installable_by_command_line-2_binaries-green) ![Shield](https://img.shields.io/badge/Packed_with-browserify-green) ![Shield](https://img.shields.io/badge/Installable_via-npm-green) ![Shield](https://img.shields.io/badge/Binary_1-uiscript-green) ![Shield](https://img.shields.io/badge/Binary_2-xcomponents-green)


# Index

- [xcomponents](#xcomponents)
- [Index](#index)
- [Online version](#online-version)
- [Documentation](#documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Binaries usage](#binaries-usage)
  - [Usage of `uiscript`](#usage-of-uiscript)
  - [Usage of `xcomponents`](#usage-of-xcomponents)
- [Extra information](#extra-information)
  - [Use Windows 7 programmatic dialogs](#use-windows-7-programmatic-dialogs)
  - [More than 25 components](#more-than-25-components)

# Online version

You have a free tester online version here:

- [https://allnulled.github.io/xcomponents-language](https://allnulled.github.io/xcomponents-language)


# Documentation

The documentation can be found:

- On NPM at [https://npmjs.com/@allnulled/xcomponents](https://npmjs.com/@allnulled/xcomponents)
- On Github at [https://github.com/allnulled/xcomponents-language](https://github.com/allnulled/xcomponents-language)

# Installation

Before starting, import the package via `npm`:

```
npm install --save @allnulled/xcomponents
```

First, you import the CSS file for general and per-component styling:

```html
<link rel="stylesheet" type="text/css" href="./node_modules/@allnulled/xcomponents/docs/lib/xcomponents/xcomponents.css" />
```

Second, you import the JS file for general and per-component logic:

```html
<script src="./node_modules/@allnulled/xcomponents/docs/lib/xcomponents/xcomponents.js"></script>
```

# Usage

Once you have done this, 2 variables are added into the global scope `window`:
  - `uiscript_api` and
  - `xcomponents_components`.

However, you can use `import` statement too to retrieve the `uiscript_api`.

The `uiscript_api` comes packed like this:

```js
window.uiscript_api = {
    ast: { parser: ast_parser },
    parser,
    components: window.xcomponents_components
};
```

The `uiscript_api.parser.parse(uiscript)` function returns HTML syntax from `uiscript` syntax.

The `uiscript_api.ast.parser.parse(uiscript)` function returns an object syntax from `uiscript` syntax.

The `uiscript_api.components` holds the `xcomponents_components` object.

The `xcomponents_components` holds all the xcomponents (Vue2) components of the library, this is:

- [**xbreadcrumb**](./docs/lib/xcomponents/components/xbreadcrumb/xbreadcrumb.md)
- [**xbutton**](./docs/lib/xcomponents/components/xbutton/xbutton.md)
- [**xdialogport**](./docs/lib/xcomponents/components/xdialogport/xdialogport.md). Imports a special API for Windows 7 dialogs based on Vue.js v2 components usage.
- [**xform**](./docs/lib/xcomponents/components/xform/xform.md)
- [**xformfield**](./docs/lib/xcomponents/components/xformfield/xformfield.md)
- [**xjumbotron**](./docs/lib/xcomponents/components/xjumbotron/xjumbotron.md)
- [**xlabel**](./docs/lib/xcomponents/components/xlabel/xlabel.md)
- [**xlayout**](./docs/lib/xcomponents/components/xlayout/xlayout.md)
- [**xlayoutnopaddingbottom**](./docs/lib/xcomponents/components/xlayoutnopaddingbottom/xlayoutnopaddingbottom.md)
- [**xlayoutnopaddingtop**](./docs/lib/xcomponents/components/xlayoutnopaddingtop/xlayoutnopaddingtop.md)
- [**xlink**](./docs/lib/xcomponents/components/xlink/xlink.md)
- [**xpage**](./docs/lib/xcomponents/components/xpage/xpage.md)
- [**xpanel**](./docs/lib/xcomponents/components/xpanel/xpanel.md)
- [**xparagraph**](./docs/lib/xcomponents/components/xparagraph/xparagraph.md)
- [**xstatic**](./docs/lib/xcomponents/components/xstatic/xstatic.md)
- [**xsubtitle**](./docs/lib/xcomponents/components/xsubtitle/xsubtitle.md)
- [**xtable**](./docs/lib/xcomponents/components/xtable/xtable.md)
- [**xtablecell**](./docs/lib/xcomponents/components/xtablecell/xtablecell.md)
- [**xtablerow**](./docs/lib/xcomponents/components/xtablerow/xtablerow.md)
- [**xtester**](./docs/lib/xcomponents/components/xtester/xtester.md)
- [**xtitle**](./docs/lib/xcomponents/components/xtitle/xtitle.md)
- [**xwindow**](./docs/lib/xcomponents/components/xwindow/xwindow.md)
- [**xwindowbody**](./docs/lib/xcomponents/components/xwindowbody/xwindowbody.md)
- [**xwindowfooter**](./docs/lib/xcomponents/components/xwindowfooter/xwindowfooter.md)
- [**xwindowfooteritem**](./docs/lib/xcomponents/components/xwindowfooteritem/xwindowfooteritem.md)
- [**xwindowtitle**](./docs/lib/xcomponents/components/xwindowtitle/xwindowtitle.md)

# Examples

The following example demonstrates how to create a new Vue.js v2 component from xcomponentsing markup.

```html
<script>
Vue.component("CustomComponent", {
    template: uiscript_api.parser.parse(`
      !div {
       !xwindow {
        !xwindowtitle {{ Título de la ventana }}
        !xwindowbody {
         !xtitle {{ Título de página }}
         !xsubtitle {{ Subttulo de página }}
         !xbreadcrumb {{ Ruta » a » subdireccion }}
         !xpanel {
          !xform {
           !xformfield {{ Usuario: }}
           !xformfield {{ Contraseña: }}
          }
         }
         !xlayoutnopaddingtop [style="text-align: right;"] {
          !xbutton {{ Entrar }}
         }
        }
        !xwindowfooter {
         !xwindowfooteritem {{ Pie de ventana }}
        }
       }
      }
    `)
});
</script>
```

# Binaries usage

## Usage of `uiscript`

To parse `uiscript` code into `html` you can simply:

```sh
uiscript file1.uis file2.uis file3.uis
```

This will output the equivalent `html` files beside each.

## Usage of `xcomponents`

To create a setup of files (`lib` folder) you can simply:

```sh
xcomponents docs
```

This will create a `lib` folder inside the `docs` folder with:

  - `calo`: [`castelog`](https://github.com/allnulled/castelog) import statement.
  - `win7`: [`win7`](https://khang-nd.github.io/7.css/) CSS library.
  - `xcomponents`: [`xcomponents`](.) JS and CSS files, and the whole component API too, in case you need to modify it.

# Extra information

## Use Windows 7 programmatic dialogs

The `xdialogport` provides a special API for Windows 7 based dialogs with very easy asynchronous methods. Visit its documentation [here](./docs/lib/xcomponents/components/xdialogport/xdialogport.md) to take full advantage of this API.

As easy as:

```js
const confirmation_1 = await Vue.prototype.$dialogs.confirm("Did you like it?", "Question", "A daily custion", "Yes", "No");
const confirmation_2 = await Vue.prototype.$dialogs.confirm({
  html: "Did you like it?",
  title: "Question",
  footer: "A daily custion",
  button_accept: "Yes",
  button_reject: "No"
});
```

## More than 25 components

The most of them are just CSS. But useful anyway to wrap the contents of your templates.

1. **xbreadcrumb**
1. **xbutton**
1. **xdialogport**
1. **xdialogcurrent**
1. **xform**
1. **xformfield**
1. **xjumbotron**
1. **xlabel**
1. **xlayout**
1. **xlayoutnopaddingbottom**
1. **xlayoutnopaddingtop**
1. **xlink**
1. **xpage**
1. **xpanel**
1. **xparagraph**
1. **xstatic**
1. **xsubtitle**
1. **xtable**
1. **xtablecell**
1. **xtablerow**
1. **xtester**
1. **xtitle**
1. **xwindow**
1. **xwindowbody**
1. **xwindowfooter**
1. **xwindowfooteritem**
1. **xwindowtitle**