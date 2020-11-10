/*
 * @Author       : terry
 * @Date         : 2020-11-10 22:01:05
 * @LastEditors  : terry
 * @LastEditTime : 2020-11-10 22:28:30
 * @FilePath     : /simple-react-ssr/webpack.config.js
 */
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
//   plugins: [
//     new CopyPlugin({
//       patterns: [
//         { from: 'public/index.html' },
//       ],
//     }),
//   ],
};