const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { NoEmitOnErrorsPlugin } = require('webpack');
const entryPoints = ["polyfills", "sw-register", "styles", "vendor", "main"];
// const { AotPlugin } = require('@ngtools/webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;
const nodeModules = path.join(process.cwd(), 'node_modules');

module.exports = {
    "resolve": {
        "extensions": [
            ".ts",
            ".js"
        ],
        "modules": [
            "./node_modules"
        ]
    },
    "entry": {
        "main": [
            "./src/main.ts"
        ],
        "polyfills": [
            "./src/polyfills.ts"
        ],
        "styles": [
            "./src/styles.css"
        ]
    },
    "output": {
        "path": path.join(process.cwd(), "dist"),
        "filename": "[name]_bundle.js",
        "chunkFilename": "[id].chunk.js"
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [{ loader: 'url-loader' }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
                  {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader']
      },
        ]
    },
    plugins: [
        new NoEmitOnErrorsPlugin(),
        new ProgressPlugin(),

        new HtmlWebpackPlugin({
            "template": "./src/index.html",
            "filename": "./index.html",
            "hash": false,
            "inject": true,
            "compile": true,
            "favicon": false,
            "minify": false,
            "cache": true,
            "showErrors": true,
            "chunks": "all",
            "excludeChunks": [],
            "title": "Webpack App",
            "xhtml": true,
            "chunksSortMode": function sort(left, right) {
                let leftIndex = entryPoints.indexOf(left.names[0]);
                let rightindex = entryPoints.indexOf(right.names[0]);
                if (leftIndex > rightindex) {
                    return 1;
                }
                else if (leftIndex < rightindex) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        }),
        new CommonsChunkPlugin({
            "name": "inline",
            "minChunks": null
        }),
        new CommonsChunkPlugin({
            "name": "vendor",
            "minChunks": (module) => module.resource && module.resource.startsWith(nodeModules),
            "chunks": [
                "main"
            ]
        }),
        /** 
        new AotPlugin({
            "mainPath": "main.ts",
            "hostReplacementPaths": {
                "environments/environment.ts": "environments/environment.ts"
            },
            "exclude": [],
            "tsConfigPath": "src/tsconfig.app.json",
            "skipCodeGeneration": true
        }) */
    ],
    "node": {
        "fs": "empty",
        "global": true,
        "crypto": "empty",
        "tls": "empty",
        "net": "empty",
        "process": true,
        "module": false,
        "clearImmediate": false,
        "setImmediate": false
    },
    "devServer": {
        "historyApiFallback": true
    }
};


