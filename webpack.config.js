const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',    //배포: production
    
    //웹팩 시작점
    entry: {
        main: './src/app.js',
    },
    output: {
        path: path.resolve('./dist'),
        //[name] 부분은 entry에 설정한 main값이 들어온다.
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.png$/,
                use: [{
                    loader: 'file-loader',
                     options: {
                        // html-webpack-plugin 사용함으로써 ../dist가 필요없어져서 주석 처리
                        //publicPath: '../dist',
                        //파일명을 hash처리된 파일명이 원본 파일명으로 변경 됨
                        name:'[name].[ext]',
                     },
                }],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],

}