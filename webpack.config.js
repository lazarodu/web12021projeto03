module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: __dirname + "/build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
