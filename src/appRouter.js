/*
 * @Author       : terry
 * @Date         : 2020-11-10 21:34:14
 * @LastEditors  : terry
 * @LastEditTime : 2020-11-10 21:49:11
 * @FilePath     : /simple-react-ssr/appRouter.js
 */
const express = require('express')
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import Document from './Document'

// 引入 express 内置的路由
const router = express.Router()

const html = ReactDOMServer.renderToString(<Document/>)


router.get('/', (req, res) => {
    res.send(html)
})

module.exports = router