var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ["style-loader","css-loader", 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", 'sass-loader']
})

var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: [
          'file-loader?name=[name].[ext]&outputPath=images/',
          'image-webpack-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats : "errors-only", //to show only errors in console
    port: 9000,
    open: true,
    hot: true
  },
  plugins: [

    new HtmlWebpackPlugin({
      title: 'My blog',
      template: './src/my-index.html', // Load a custom template (lodash by default see the FAQ for details)
      minify:{
        collapseWhitespace: true
      },
      hash: true,
    }),
     new ExtractTextPlugin({
       filename: 'app.css',
       disable: !isProd ,
       allChunks: true
     }),
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
  ]
}
