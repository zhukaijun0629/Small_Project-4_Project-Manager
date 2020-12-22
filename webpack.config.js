const path = require("path");

module.exports = {
  mode:'development',
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist/js"),
    // publicPath: "/dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "Lectures"),
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    publicPath: "/dist",
  },
};
