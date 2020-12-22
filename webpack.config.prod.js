const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: [
          path.resolve(__dirname,"node_modules"),
          path.resolve(__dirname,"Lectures")
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
