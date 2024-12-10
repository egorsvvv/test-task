const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'), // Входной файл
  output: {
    path: path.resolve(__dirname, './dist'), // Куда собирать файлы
    filename: 'bundle.js', // Имя сборки
    clean: true, // Очистка папки dist перед сборкой
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png'], // Расширения, которые Webpack будет обрабатывать
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource'
      },
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), // Шаблон HTML
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'), // Папка, из которой сервер отдаёт файлы
    historyApiFallback: true, // Поддержка React Router
    hot: true,
    port: 4000, // Порт для разработки
    open: true, // Автоматическое открытие в браузере
  },
  mode: 'development', // Режим разработки
};
