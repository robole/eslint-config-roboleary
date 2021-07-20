# eslint-config-roboleary

This is my default ES Lint config, which I use along side Prettier.

## Rules

It includes the following:
- The [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) config gives a core collection of rules.
- The [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) config to turn off the ESLint rules that conflict or are unnecessary when using Prettier.

## Installation

1. Install this package with `npm i eslint-config-roboleary`.
1. Create an eslint config file in the root of your project directory e.g. _.eslintrc_. Add the following:

   ```json
   {
     "extends": ["eslint-config-roboleary"]
   }
   ```

   Alternatively, you can put a reference to the config in your _package.json_ under the property `eslintConfig`.

1. You can add scripts to your _package.json_ to lint, fix, and format your code from the command-line.

```json
{
	"scripts": {
		"lint": "eslint .",
		"lint:fix": "npm run lint -- --fix",
		"prettier": "prettier src test --check",
		"prettier:fix": "npm run prettier -- --write",
	},
}
```

## Configuration in VS Code

If you want to use ES Lint and Prettier in VS Code, I recommend installing the extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details).

To format and lint on save, you can update your user settings with the following:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.probe": [
      "javascript",
      "javascriptreact",
      "vue"
  ],
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": [
    "source.formatDocument",
    "source.fixAll.eslint"
  ],
}
```

If you use the Vetur plugin, ensure that Vetur's template validation does not interfere with linting. The setting is `"vetur.validation.template": false`, it is `false` by default.
