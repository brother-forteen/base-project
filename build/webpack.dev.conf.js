/**
 * @createDate: 2019/11/15
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
'use strict';
const merge = require('webpack-merge');
const config = require('./../config');
const utils = require('./utils');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const portfinder = require('portfinder');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            usePostCss: true
        })
    },

    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devTool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/,
                    to: path.posix.join(config.dev.assetsPublic, 'index.html')
                },
            ],
        },
        hot: config.dev.hot,
        contentBase: config.dev.contentBase,           // since we use CopyWebpackPlugin
        compress: config.dev.compress,               // 一切服务都启用gzip 压缩
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? { warning: false, errors: true } : false,
        publicPath: config.dev.assetsPublic,
        proxy: config.dev.proxyTable,
        progress:  config.dev.progress,
        // quiet: true,                // necessary for FriendlyErrorsPlugin
        // headers: config.dev.headers,
        watchOptions: {
            poll: config.dev.poll
        },
        inline: true,
        noInfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),                 //webpack内置的热更新插件

        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('/')
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if(err){
            reject(err);
        }else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            devWebpackConfig.devServer.port = port;

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors
                ? utils.createNotifierCallback()
                : undefined
            }));

            resolve(devWebpackConfig)
        }
    })
});
