/*
 * @Author       : terry
 * @Date         : 2020-11-10 21:08:10
 * @LastEditors  : terry
 * @LastEditTime : 2020-11-10 22:25:31
 * @FilePath     : /simple-react-ssr/src/server.js
 */
// 引入babel相关插件，解决node 不能使用jsx, 同时记得将路由提取出去
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
})

const express = require('express')
const app = express()
const PORT = 3000
const appRouter = require('./appRouter')


app.use('/', appRouter)

app.listen(PORT, () => {
    console.log('server is listening on port 3000!')
})