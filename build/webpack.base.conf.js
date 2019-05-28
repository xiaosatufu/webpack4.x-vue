const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoDllPlugin = require("autodll-webpack-plugin");


console.log('-------------------')
console.log(process.env.NODE_ENV)
console.log('-------------------')


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
        test: /\.scss$/,
        use: [
           process.env.NODE_ENV != 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          // MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // 开启 CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: "[local]_[hash:base64:8]"
            }
          },

          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
      //   {
      //     test: /\.scss$/,
      //     use: [
      //       "vue-style-loader",
      //       MiniCssExtractPlugin.loader,
      //       // {
      //       //     loader:'style-loader'

      //       // },
      //       {
      //         loader: "css-loader",
      //         options: {
      //           // 开启 CSS Modules
      //           modules: true,
      //           // 自定义生成的类名
      //           localIdentName: "[local]_[hash:base64:8]"
      //         }
      //       },
      //       {
      //         loader: "postcss-loader"
      //       },
      //       {
      //         loader: "sass-loader"
      //       }
      //     ]
      //   }
    ]
  },
  plugins: [
    // new ExtractTextPlugin(
    //   filename: utils.assetsPath("css/[name].[contenthash].css"),
    //   allChunks: false
    // ),
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
      inject: true,
      debug: false,
      filename: "[name]_[hash].js",
      path: "static",
      entry: {
        vue: [
          "vue"
          // 'vue-router'
        ]
      }
    })
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src")
    },
    extensions: ["*", ".js", ".json", ".vue"]
  }
};
