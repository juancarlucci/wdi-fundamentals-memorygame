// webpack.config.js

module.exports = {
  entry: "./app",
  output: {
    path: "/wdi-fundamentals-memorygame/build/index.html",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./build",
    inline: true
  },
  externals: {
    cheerio: "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".scss"]
  }
};
