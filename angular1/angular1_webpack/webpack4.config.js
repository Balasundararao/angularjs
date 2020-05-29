const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// exports...
module.exports = (env, argv) => {
  const mode = argv.mode || "development";
  const isDev = mode === "development";
  const isProd = mode === "production";

  const entry = {
    main: ["./src/index.js"],
  };

  const _module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "./src"),
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: [MiniCssExtractPlugin.loader, 'style-loader', "css-loader"],
      // },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["style-loader", "css-loader", "sass-loader"],
        }),
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      { test: /\.html$/, use: "raw-loader" },
      {
        test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 8192, name: "[name].[hash:20].[ext]" },
          },
        ],
      },
      {
        test: /\.(eot|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[hash:20].[ext]" },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[hash:20].[ext]" },
          },
        ],
      },
    ],
  };
  const optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: "react",
          chunks: "all",
        },
      },
    },
  };

  const output = {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  };

  const plugins = [
    // new ProgressBarPlugin(),
    // new Visualizer({filename: './statistics.html'}),
    // new CopyWebpackPlugin([
    //   {
    //     patterns: [{ from: "./src/views", to: "views" }],
    //   },
    // ]),
    new MiniCssExtractPlugin({
      filename: "./assets/[name].bundle.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunksSortMode: function (a, b) {
        var order = ["styles", "polyfills", "vendor", "main"];
        return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
      },
    }),
    // new webpack.LoaderOptionsPlugin({
    //     options: {
    //         postcss:[
    //             autoprefixer()
    //         ]
    //     }
    // }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ];

  if (isProd) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  // const resolve
  const resolve = {
    extensions: [".ts", ".js"],
  };

  return {
    entry,
    mode,
    output,
    module: _module,
    plugins,
    optimization,
    externals: {
      jquery: "jQuery", //jquery is external and available at the global variable jQuery
    },
  };
};
// resolve,
