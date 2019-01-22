// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ],
  devServer: {
    contentBase: '.src/',
    port: 7700,
  },
  module: {
    rules: [
      /*
       *       your other rules for JavaScript transpiling go in here
       *             */
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  }
};
