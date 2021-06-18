const path=require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name: "server",
    entry: [path.join(CURRENT_WORKING_DIR,"server/server.js")],
    output:{
        path: path.join(CURRENT_WORKING_DIR,"dist"),
        filename: "server.generated.js",
        publicPath: "/dist/",
        libraryTarget: "commonjs2"
    },
    target: 'node',
    externals: [webpackNodeExternals()],
    module:{
        rules:[
            {
                "test":/\.jsx?$/,
                "exclude":/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.(ttf|eot|svg|gif|jpg|jpeg|png)(\?[\s\S]+)?$/,
                use:"file-loader"
            }
        ]
    }
};

module.exports = config;