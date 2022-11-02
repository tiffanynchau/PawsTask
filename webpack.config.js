const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",

  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),

      // publicPath: "/build",
    },

    port: 8080,
    proxy: {
      "/**": "http://localhost:3000",
    },
    watchFiles: ["client/**"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /.(css|scss)$/,
        exclude: /node_module/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
