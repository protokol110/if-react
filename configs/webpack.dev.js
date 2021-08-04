const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],

    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        open: true,
    },
});
