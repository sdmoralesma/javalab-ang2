var webpack = require("webpack");
module.exports = {
    entry: "./app/boot",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [{
            test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
        }]
    }
};