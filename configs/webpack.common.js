const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports= {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js',
    },
    module: {
        rules: [

            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        'css-loader'
                    ]
            },
            {
                test: /\.(js|jsx)$/,

                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/',
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },

        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]

    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/index.html'
        }),
    ],

};
