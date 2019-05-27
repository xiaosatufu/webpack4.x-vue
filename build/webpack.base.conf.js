const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoDllPlugin = require('autodll-webpack-plugin')
module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/main.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|jfif|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "static/images/[hash:8].[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.l?s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // {
          //     loader:'style-loader'

          // },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.optimize.SplitChunksPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[hash].css",
      chunkFilename: "static/css/[name].[hash].css"
    }),
    new AutoDllPlugin({
        inject:true,
        debug:false,
        filename:'[name]_[hash].js',
        path:'static',
        entry:{
            vue:[
                'vue',
                // 'vue-router'
            ]
        }
    })
  ],
  resolve: {
    alias: {
      'vue$': "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src")
    },
    extensions: ["*", ".js", ".json", ".vue"]
  }
};
