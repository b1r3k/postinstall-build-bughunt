var path = require('path');
var webpack = require('webpack');

var isProductionBuild = process.argv.indexOf('--production') !== -1;

var webpackCfg = {
    devtool: 'eval',
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    output: {
        contentBase: path.join(__dirname, 'src'),
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                include: path.join(__dirname, '..', '..', 'src')
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, '..', '..', 'src')
            },
            {
                test: /\.css?$/,
                loaders: ["style-loader", "css-loader"],
                include: __dirname
            }]
    }
};

module.exports = webpackCfg;
