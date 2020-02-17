/**
 * @createDate: 2019/11/15
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happyPack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: [
            // ...(utils.styleLoaders({
            //     sourceMap: config.build.productionSourceMap,
            //     extract: true,
            //     usePostCSS: true
            // })),
            {
                test: /\.js$/,
                use: [{
                    loader: 'happypack/loader?id=happyBabel'
                }],
                exclude: /node_modules/
            }
        ]
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'all'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            // new UglifyJsPlugin({
            //     sourceMap: config.build.productionSourceMap,
            //     uglifyOptions: {
            //         warnings: false,
            //         drop_console: true,
            //         pure_funcs: ['console.log']
            //     },
            //     parallel: true
            // }),

            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                uglifyJs: {
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compress: {
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true
                    }
                }
            })
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: utils.assetsPath('css/[name][hash].css'),
            chunkFilename: utils.assetsPath('css/[id][hash].css')
        }),

        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap
                ? { safe: true, map: { inline: false } }
                : { safe: true }
        }),

        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),

        // enable scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),

        // 定义全局变量
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('/')
        }),

        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
            }
        ]),

        new HappyPack({
            id: 'happyBabel',  // 与loader对应的id标识
            // 用法和loader的配置一样，注意这里是loaders
            loaders: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env']
                    ],
                    cacheDirectory: true
                }
            }],
            threadPool: happyThreadPool // 共享进程池
        })
    ]
});



if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
