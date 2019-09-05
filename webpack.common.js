const webpack = require("webpack");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const config = {
  entry: path.resolve(__dirname, "app/App.tsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx|js|jsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/html/index.html",
      title: "Starter-React-Flux"
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, "app", "sw.js"),
      swDest: path.resolve(__dirname, "public", "sw.js")
    }),
    new WebpackPwaManifest({
      name: "Starter-React-Flux",
      short_name: "SRF",
      description: "A Progressive Web App generated by Starter-React-Flux",
      background_color: "#ffffff",
      inject: true,
      fingerprints: true,
      ios: true,
      crossorigin: null,
      icons: [
        {
          src: path.resolve("app/icon/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512, 1024]
        }
      ]
    })
  ]
};

module.exports = config;
