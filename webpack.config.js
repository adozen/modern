const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'build',
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader?cacheDirectory=true'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            use: ['url-loader?name=[hash:8].[ext]']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'eval-source-map',
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        inline: true,
        hot: true,
        stats: {
            children: false,
            chunks: false,
        }
    }
}