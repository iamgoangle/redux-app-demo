const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './template/index.html',
    filename: 'index.html',
    inject: 'body',
    title: 'GOLF - REDUX APP'
});

module.exports = {
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    watch: true,
    plugins: [HtmlWebpackPluginConfig],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            }
        ]
    }
};