const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development', // 배포할 때는 production으로 바꾸어 주면 된다. 
    devtool: 'eval',     // 배포할 때는 hidden-source-map으로 바꾸어 주면 된다. 
    entry:{
        app: path.join(__dirname, 'main.js'),
    },
    resolve:{
        extensions: ['.js','.vue']
    },
    module:{
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename: '[name].js',  //[name]이라 함으로써 저 app을 가르키게 됨.
        path: path.join(__dirname, 'dist'),  //폴더가 하나 생길 거임
    }
}