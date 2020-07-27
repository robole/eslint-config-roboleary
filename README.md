# ESLint and Prettier Config

These are my settings for using ESLint and Prettier happily together for different JavaScript environments.

## What it does

This setup uses ESLint for catching bugs, and Prettier for formatting.

The basis for the rules is [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb). It uses the [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to turn off the ESLint rules that conflict or are unnecessary when using Prettier.

It provides the ability to lint and fix the following JavaScript flavours:

- "Vanilla" JavaScript
- Node (via `eslint-config-node`)
- React (via `eslint-config-airbnb`)
- Vue (via `eslint-plugin-vue`)

I also wanted to include linting for `script` blocks in HTML files through [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html), BUT it clashes `eslint-plugin-vue`. The [FAQ in the eslint-plugin-vue docs](https://eslint.vuejs.org/user-guide/#faq) outlines the issue.

## Installation

You can use ESLint globally and/or locally.

It's usually best to install it for each project, that way you can have project specific settings available to others working on your project via git.

I also install ESLint globally so that any quick and dirty project or rogue JS file I write will have linting and formatting applied without having to go through a setup.

## Local (per Project)

1. If you don't already have a _package.json_, create one with ``npm init`.
1. We need to install everything needed by the config:

   ```bash
   npx install-peerdeps -D eslint-config-roboleary
   ```

1. You can now see in your _package.json_ that there is a big list of `devDependencies`.
1. Create a _.eslintrc_ file in the root of your project directory. Your _.eslintrc_ file should look like this:

   ```bash
   {
     "extends": ["roboleary"]
   }
   ```

   Alternatively, you can put a reference to the config in your _package.json_ under the property `eslintConfig`.

1. You can add scripts to your _package.json_ to lint, fix, and format your code from the command-line:

   ```bash
   "scripts": {
    "lint": "eslint . --ext .js,.vue",
    "lint:fix": "eslint --ext .js,.vue --fix .",
    "format": "npx prettier . --write"
   },
   ```

1. You probably want your editor to do the linting and formatting for you though! You can check out [my settings in VS Code below](#using-in-vs-code)

### Global

1. Install the config globally:

   ```bash
   npx install-peerdeps -g eslint-config-roboleary
   ```

1. You need to make a global _.eslintrc_ file. ESLint will look for one in your home directory:

   - ~/.eslintrc for mac
   - C:\Users\username\.eslintrc for windows

   In your .eslintrc file, it should look like this:

```javascript
{
  "extends": [
    "roboleary"
    ]
}
```

## Using in VS Code

1. Install [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
1. Update your User Settings for linting and formatting for the specific language variants we are interested in, we are targeting JavaScript, React, and Vue. It's easier to enter these settings directly in _settings.json_ file, open the Command Palette (`Ctrl+Shift+P`), and run the Command `Preferences: Open Settings (JSON)` to open it in the editor. Add the following settings:

```json
  //linting and formatting settings
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "vue"
  ],
  // Triggers ESLint plugin to run on save
  "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
  },
  "vetur.validation.template": false
```

I use `eslint.probe` to target languages which ESLint should try to validate. If validating fails ESLint will stay silent. You can use `eslint.validate` instead if you want to see pop-up messages ousting a file as invalid.

If you use the Vetur plugin, setting `"vetur.validation.template": false` avoids default Vetur template validation. Check out [vetur documentation](https://vuejs.github.io/vetur/linting-error.html#linting)
for more info.
