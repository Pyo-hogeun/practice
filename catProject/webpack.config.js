const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode:"none",
    entry: "./script.js",
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: "index.js",
    },
    module: {
        rules:[{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'css-loader'],
        }],

    },
    plugins:[
        new MiniCssExtractPlugin({filename: 'builded-style.css'}),
    ],
    devServer: {
        contentBase: path.join(__dirname, '/build'),
        port: 8080,
    }

}