/**
 * @createDate: 2019/11/15
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
'use strict';

const path = require('path');
module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublic: '/',
        proxyTable: {
            '/api': {
                target: '172.10.10:8080/',
                changeOrigin: true,         // 是否跨域
                // secure: false,              // 如果是https接口，需要配置这个参数
                pathRewrite: {
                    '^/api': ''             // 需要rewrite
                }
            }
        },
        headers: {

        },
        // Various Dev Server Settings
        host: 'localhost',
        port: '8080',
        hot: true,
        contentBase: false,
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,                        // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
        compress: true,
        progress: true,
        /**
         * Source Maps
         * **/

        // https://webpack.js.org/configuration/devtool/#development
        devTool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },
    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublic: '/',

        /**
         * Source Maps
         * **/

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: 'source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ['js', 'css', 'json'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
};
