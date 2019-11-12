module.exports = {
    entry:{
        app:'./main.js',
    },
    module:{
        rules:[{
        }],
    },
    plugins:[],
    output:{
        filename: '[name].js',  //[name]이라 함으로써 저 app을 가르키게 됨.
        path:'./dist',  //폴더가 하나 생길 거임
    }
}