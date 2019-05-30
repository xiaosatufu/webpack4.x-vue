const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.conf')
module.exports = merge(baseConfig,{
    mode:'development',
    // BASE_URL:'http://192.168.2.211',
    devtool:'inline-source-map',
    devServer:{
        contentBase:path.resolve(__dirname,'../dist'),
        open:true
    }
})