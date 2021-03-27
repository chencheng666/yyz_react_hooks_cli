var { merge }  = require('webpack-merge')
let config = require('./base.js')
let ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

module.exports = merge(config, {
    devtool: 'cheap-eval-source-map',
    optimization: {
        minimizer: [
            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                warnings: false,
                uglifyJS: {
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
            }),
        ],
        runtimeChunk: {
            'name': 'manifest',
        },
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups:{
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    name: 'vendor',
                    chunks: 'async',
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    enforce: true,
                },
            }
        },
    },
});