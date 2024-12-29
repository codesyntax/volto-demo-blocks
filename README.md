# Volto Demo Blocks (volto-demo-blocks)

An addon for Volto thatt contains some dummy blocks. The code on this block is a demo you can copy to your project. Its aim is to show how simple blocks are built using components provided by Volto

[![npm](https://img.shields.io/npm/v/volto-demo-blocks)](https://www.npmjs.com/package/volto-demo-blocks)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://codesyntax.github.io/volto-demo-blocks/)
[![Code analysis checks](https://github.com/codesyntax/volto-demo-blocks/actions/workflows/code.yml/badge.svg)](https://github.com/codesyntax/volto-demo-blocks/actions/workflows/code.yml)
[![Unit tests](https://github.com/codesyntax/volto-demo-blocks/actions/workflows/unit.yml/badge.svg)](https://github.com/codesyntax/volto-demo-blocks/actions/workflows/unit.yml)

## Features

This addon provides 6 different Volto Blocks. They are meant to be used as demo-code to learn how Volto Blocks are created.

You can copy-and-paste the code into your project and modify where required.

All block code is compatible with the [Block style wrapper](https://6.docs.plone.org/volto/blocks/block-style-wrapper.html) so either the values coming from the `styling` schema (if available) or class names added by the [styleClassNameExtenders](https://6.docs.plone.org/volto/configuration/settings-reference.html#term-styleClassNameExtenders) will be available in your blocks.

### Block 01: custom schema, no View and no Edit components

This block uses Volto provided View and Edit components. It only configures a custom schema with a URL and a title.

This block shows how Volto provides the Edit component automatically, without needing to add any boilerplate. It also shows that Volto provides a very simple View component that renders all values in the schema.


### Block 02: custom schema and View. No Edit component

This block uses Volto provided Edit component. It configures a custom schema with a URL and a title and provides also a View component.

This block shows how we can configure a simple block with some fields and build a custom view component for it without worrying about the Edit component.

### Block 03: custom View and Edit components

This block uses custom View and Edit components. As we are using a custom Edit component, there is no need to configure the block schema.

This block shows how we can create a simple block with custom View and Edit components. The Edit component featured here is a basic one where we just inject a schema in it.

### Block 04: custom View and schema, and manual variations

This block uses a custom view component and defines a schema for it. But the schema features a special field called `variation` and also a list of available `variations` in the block configuration.

This block shows how to create a *manual* implementation of variations and how we call the selected variation's template.

### Block 05: custom View and variations provided by Volto

This block uses a custom view component and makes use of the `withBlockExtensions` HOC that Volto provides to provide variations.

This block shows how we can build a block that uses variations. Just wrapping the view component definition with the `withBlockExtensions` HOC, and providing a list of variations in the block config.

### Block 06: custom View, variations provided by Volto, and schema enhancing in a given variation

This block uses a custom view component and makes use of the `withBlockExtensions` HOC that Volto provides to provide variations. One of the variation uses a schema enhancer to provide additional fields to the block when using this variation.

This block shows how we can build a block that uses variations. Just wrapping the view component definition with the `withBlockExtensions` HOC, and providing a list of variations in the block config. Moreover, it shows how we can use the schema enhancing functionality to add additional fields to the block when using a given variation.

## Installation

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon volto-demo-blocks
cd my-volto-project
```

Add `volto-demo-blocks` to your package.json:

```JSON
"addons": [
    "volto-demo-blocks"
],

"dependencies": {
    "volto-demo-blocks": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start volto with:

```
yarn start
```

### Volto 18 and later

Add `volto-demo-blocks` to your `package.json`:

```json
"dependencies": {
    "volto-demo-blocks": "*"
}
```

Add `volto-demo-blocks` to your `volto.config.js`:

```javascript
const addons = ['volto-demo-blocks'];
```

If this package provides a Volto theme, and you want to activate it, then add the following to your `volto.config.js`:

```javascript
const theme = 'volto-demo-blocks';
```

## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.


## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Pre-requisites

-   [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
-   [Make](https://6.docs.plone.org/install/create-project.html#make)
-   [Docker](https://6.docs.plone.org/install/create-project.html#docker)


### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 🙏

Crafted with care by **Generated using [Cookieplone (0.8.1)](https://github.com/plone/cookieplone) and [cookiecutter-plone (d9b5293)](https://github.com/plone/cookiecutter-plone/commit/d9b52933cbc6efd137e93e35a270214e307359f0) on 2024-12-29 17:06:29.942612**. A special thanks to all contributors and supporters!
