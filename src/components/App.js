/*
 * @Author       : terry
 * @Date         : 2020-11-10 21:56:53
 * @LastEditors  : terry
 * @LastEditTime : 2020-11-10 22:22:16
 * @FilePath     : /simple-react-ssr/src/components/App.js
 */
import React from 'react';

const App = () => {
    return (
        // <html>
        //     <head>
        //         <title>simple-react-ssr</title>
        //     </head>
        //     <body>
        //         <h1 onCLick={() => alert('clicked!')}>Hello SSR!</h1>
        //     </body>
        // </html>
        <h1 onCLick={() => alert('clicked!')}>Hello SSR!</h1> 
    );
}

export default App;