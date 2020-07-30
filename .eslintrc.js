module.exports = {
  env: {
    browser: true,
    node: true,
    es2017: true,
    commonjs: true,
    mocha: true,
  },
  plugins: ["vue", "react-hooks","node"],
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "prettier/vue",
    "plugin:node/recommended",
    "plugin:vue/essential",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-use-before-define": "off",
    "prefer-const": "off",
    "radix":"off",
    "no-plusplus":{ "allowForLoopAfterthoughts": true }
  },
};
