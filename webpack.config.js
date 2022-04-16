const fs = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const SassLintPlugin = require("sass-lint-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env, argv) => {
  const cssLoaders = [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader",
    "sass-loader",
  ];

  if (argv.mode === "development") {
    cssLoaders.splice(2, 1);
  }

  return {
    entry: {
      main: ["./src/ts/main.ts"],
      style: ["./src/scss/style.scss"],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.scss/,
          use: cssLoaders,
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        { test: /\.(glsl|vs|fs)$/, loader: "ts-shader-loader" },
      ],
    },
    resolve: {
      extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    },
    // stats: {
    //   warnings: false,
    // },
    plugins: [
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin(),
      new SassLintPlugin({
        ignorePlugins: ["extract-text-webpack-plugin"],
      }),
      new ESLintPlugin(),
    ],
  };
};
