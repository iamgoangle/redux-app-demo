const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './template/index.html',
    filename: 'index.html',
    inject: 'body',
    title: 'GOLF - REDUX APP'
});

const jQuery = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
});

module.exports = {
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ]
    },
    watch: true,
    plugins: [HtmlWebpackPluginConfig, jQuery],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            }, { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader",
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?mimetype=image/svg+xml'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }
        ]
    }
};