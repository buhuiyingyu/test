// shared config (dev and prod)
const  {resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
module.exports = {
  entry:["./src/index.tsx"],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // alias: { // 减少使用别名提高编译速速
    //   '@app': path.join(__dirname, '../app'),
    //   '@actions': path.join(__dirname, '../app/redux/actions'),
    //   '@reducers': path.join(__dirname, '../app/redux/reducers'),
    //   '@apis': path.join(__dirname, '../app/apis'),
    //   '@components': path.join(__dirname, '../app/components'),
    //   '@configs': path.join(__dirname, '../app/configs'),
    //   '@config': path.join(__dirname, '../app/configs/config.js'),
    //   '@ajax': path.join(__dirname, '../app/configs/ajax.js'),
    //   '@reg': path.join(__dirname, '../app/configs/regular.config.js'),
    //   '@images': path.join(__dirname, '../app/images'),
    //   '@middleware': path.join(__dirname, '../app/middleware'),
    //   '@pages': path.join(__dirname, '../app/pages'),
    //   '@styles': path.join(__dirname, '../app/styles'),
    //   '@tableList': path.join(__dirname, '../app/components/tableList/tableList.js'),
    //   'react-dom': devMode ? '@hot-loader/react-dom' : 'react-dom', // react-hot-loader需要
    // },
  },
  // context: resolve(__dirname, "../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};