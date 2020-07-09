# eslint/prettier/stylelint 代码风格检查实践

## eslint

> [ESLint+Prettier 代码规范实践](https://zhuanlan.zhihu.com/p/68026905)

### 配置

主要配置项：`eslint`/`prettier`/`eslint-config-prettier`/`eslint-plugin-prettier`/`babel-eslint`

- `eslint` 检查 js 代码语义
- `prettier` 重置代码风格
- `eslint-config-prettier` 禁用`eslint`中与`prettier`冲突的规则
- `eslint-plugin-prettier` 在`eslint`中使用`prettier`，并自动继承`eslint-config-prettier`中的规则
- `babel-eslint` 常用的`eslint`解析器

其它配置项

1. （支持`Vue`）：`eslint-plugin-vue`/`vue-eslint-parser`

- vue-eslint-parser 为了支持`vue`文件，需要使用该解析器替换`babel-eslint`，可在`parserOptions`中定义`babel-eslint`。
- eslint-plugin-vue 支持 vue 语法

2. 支持`html`文件： `eslint-plugin-html`

基本配置如下：

```js
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
```

### 集成

- `eslint-loader` 在 `webpack` 构建流程检查
- `npm script`中配置`eslint --fix **/*.{js,vue}`
- `husky`/`lint-staged` 在 `commit` 时检查
- `vscode-eslint` 编辑器集成

## stylelint

> [如何在 Vue+Webpack 下配置 Stylelint](https://www.jianshu.com/p/8a33aa5e34b5)

### 配置

主要配置项：`stylelint`/`prettier`/`stylelint-config-prettier`/`stylelint-prettier`

- `stylelint` 检查 css 代码语义
- `prettier` 重置代码风格
- `stylelint-config-prettier` 禁用`stylelint`中与`prettier`冲突的规则
- `stylelint-prettier` 在`stylelint`中使用`prettier`，并自动继承`stylelint-config-prettier`中的规则

官方推荐配置：`stylelint-config-standard`/`stylelint-order`

- `stylelint-config-standard` 官方推荐规则
- `stylelint-order` 属性顺序检查，无默认规则需要自己在`rules`中添加；可以结合使用`stylelint-config-recess-order`。

基本配置如下：

```js
//.stylelintrc.js
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order"],
  rules: {},
};
```

### 集成

- `stylelint-webpack-plugin` 在`webpack`构建流程检查
- `npm script`中配置`stylelint --fix **/*.{css,less,vue}`
- `husky`/`lint-staged` 在 `commit` 时检查
- `vscode-stylelint` 编辑器集成,

## prettier

> 使用`eslint`/`stylelint`之外，再用`prettier`格式化其它文件

- `vscode-prettier` 编辑器插件
- `npm script` 配置 prettier --write \*_/_.{html,json,md,yml}

## editorconfig

> 用来规范编辑器之间的默认格式化行为

## 踩坑

1. 修改了`.prettierrc.js`配置后`vscode`的`stylelint`不能立即生效需要重启。
