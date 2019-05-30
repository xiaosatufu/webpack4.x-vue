const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const baseConfig = require("./webpack.base.conf");
module.exports = merge(baseConfig, {
  mode: "production",
  // BASE_URL: "http://192.168.2.212",
  devtool: "source-map",
  module: {
    rules: []
  },
  plugins: [
    // new CleanWebpackPlugin(["dist/"], {
    //   root: path.resolve(__dirname, "../")
    // })
    new CleanWebpackPlugin()
  ]
});
