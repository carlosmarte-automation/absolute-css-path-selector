//node_modules/axe-selector/src/index.ts

import path from 'path';

export default [
  {
    mode: "production",
    entry: "./node_modules/axe-selector/dist/index.js",
    output: {
      path: path.resolve("bundle"),
      filename: "axe-selector.bundle.js",
      library: "axeSelector",
      libraryTarget: "umd",
      libraryExport: "default",
      globalObject: "this",
    },
  },
  {
    mode: "production",
    entry: "./src/index.js",
    output: {
      path: path.resolve("bundle"),
      filename: "index.bundle.js",
      library: "absoluteCssPathSelectors",
      libraryTarget: "umd",
      libraryExport: "default",
      globalObject: "this",
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]],
            },
          },
        },
      ],
    },
  },
];

//const selector = getSelector(el)
