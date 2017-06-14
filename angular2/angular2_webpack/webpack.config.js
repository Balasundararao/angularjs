const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts',
        test: './src/test.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_min.js',
        publicPath: "http://www.cisco.com/[hash]/"
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [{loader: 'url-loader'}]
            },
            {
                test: /\.html$/,
                use: [ 'file-loader?name=[path][name].[ext]!extract-loader!html-loader' ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:'/node_modules/'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};


