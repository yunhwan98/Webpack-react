const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  name: 'webpack-setting',
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // 빠르게

  entry: {
    //제일 중요!
    app: ['./src/index.jsx'],
  }, // 입력
  output: {
    path: path.join(__dirname, 'docs'), // 현재 폴더의 dist폴더에 생성
    filename: '[name].js',
    clean: true,
  }, // 출력
  // entry에 있는 파일을 읽고 module을 적용한 후 output
  module: {
    //모듈 연결 설정
    rules: [
      {
        test: /.(js|jsx)$/, // 대상 설정 정규식
        use: 'babel-loader',
      },
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
