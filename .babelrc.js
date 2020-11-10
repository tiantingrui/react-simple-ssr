/*
 * @Author       : terry
 * @Date         : 2020-11-10 22:02:07
 * @LastEditors  : terry
 * @LastEditTime : 2020-11-10 22:03:24
 * @FilePath     : /simple-react-ssr/.babelrc.js
 */
module.exports = {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": 67,
          },
          "useBuiltIns": "usage"
        }
      ],
      "@babel/preset-react"
    ]
  }