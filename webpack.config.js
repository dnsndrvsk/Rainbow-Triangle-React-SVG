const path = require('path')
const webpack = require('webpack')

module.exports = {
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loaders: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.min.js'
    },
    plugins: [
      
    ],
    mode: 'production'
}
