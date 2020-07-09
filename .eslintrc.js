module.exports = {
  root: true,
  parser: "vue-eslint-parser",

  extends: ["eslint:recommended", "plugin:vue/essential", "plugin:prettier/recommended", "prettier/vue"],
  plugins: ["html"],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  globals: {},
  rules: {},
};
