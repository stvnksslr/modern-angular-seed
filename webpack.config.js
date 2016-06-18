var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'sourcemap',
    entry: {},
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/, /server/], loader: 'ng-annotate!babel-loader' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
            }
        })
    ]
};
