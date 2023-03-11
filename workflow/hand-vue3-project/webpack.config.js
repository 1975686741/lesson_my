// webpack 工程化的配置文件
const path = require('path')  // 引入path node 内置路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// html + js 结合起来
// console.log(__dirname, path.resolve(__dirname, './src/main.js'))
module.exports = { // commonjs 模块化输出 
    entry: path.resolve(__dirname, './src/main.js'),
    // 工艺流程
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.stylus$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                use: [
                    'file-loader',
                    'url-loader'
                ]
            },
            {
                // es6+   转成目标运行设备可执行的代码
                test: /\.js$/,
                exclude : /node_modules/ ,  // 不需要转义，提升编译时间
                loader : 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '手搭 Vue 开发环境'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 8888,
    }
    //App.vue  .js 
    // tempalte
    // script     .vue 格式   -> vite webpack 工程化  .vue -> .js 
    // style 
}