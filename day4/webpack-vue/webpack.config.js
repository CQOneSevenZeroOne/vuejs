var path = require("path");
module.exports = {
    // 入口 引入根目录下的index.js
    entry: './index.js',
    // 出口 导出到public下的bundle.js
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // 加载器 把非JS类型文件转为JS能处理的文件
    module: {
        rules: [
            // 处理图片的loader
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader'
            },
            // 处理txt类型的loader
            {
                test: /\.txt$/,
                use: 'text-loader'
            },
            // 处理json类型的loader
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            // 处理html类型的loader
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            // 处理css类型的loader
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    // 替换vue的加载路径
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        }
    },
    watch: true
};