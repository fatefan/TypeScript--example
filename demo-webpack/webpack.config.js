'use strict'
var webpack = require('webpack')
module.exports = {
    entry:{
        'd':'./d.ts',
        'c':'./c.ts'
    },
    output:{
        filename :"./build/[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions:['.ts','.tsx']
    }
}