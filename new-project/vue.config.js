module.exports = {
    devServer: {
        'proxy': 'http://localhost:8080/'
    },
    pages:{
        'index':{
            entry:'./src/pages/Home/main.js',
            template:'./src/pages/Home/index.html',
            title:'Home',
            chunks:['chunk-vendors', 'chunk-common', 'index']
        },
        'test':{
            entry:'./src/pages/Test/main.js',
            template:'./src/pages/Test/index.html',
            title:'Test',
            chunks:['chunk-vendors', 'chunk-common', 'test']
        }
    }
}