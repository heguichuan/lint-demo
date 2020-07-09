const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/main.js",
  output: {
    path: path.resolve(process.cwd(), "./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              fix: process.env.NODE_ENV === "production" ? false : true,
            },
          },
        ],
        enforce: "pre",
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new StylelintPlugin({
      files: ["src/**/*.{css,less,vue}"],
      fix: process.env.NODE_ENV === "production" ? false : true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
    }),
  ],
};
