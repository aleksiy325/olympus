//require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,

    entry: ['webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/frontend/assets/js/index',
    ],

    output: {
        path: path.resolve('./src/frontend/assets/bundles/'),
        filename: '[name]-[hash].js',
        publicPath: 'http://localhost:3000/assets/bundles/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleTracker({ filename: './src/webpack-stats.json' }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },

    resolve: {
        modules: ["node_modules"],
        moduleExtensions: ['-loader'],
        extensions: ['.js', '.jsx']
    }
}
