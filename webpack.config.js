const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "index.js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    },
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "BeOnChat",
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};