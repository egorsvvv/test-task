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
    extensions: ['.tsx', '.ts', '.js'], // Расширения, которые Webpack будет обрабатывать
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Обработка TypeScript файлов
        exclude: /node_modules/,
        use: 'ts-loader', // TypeScript компилятор
      },
      {
        test: /\.css$/, // Обработка CSS файлов
        use: ['style-loader', 'css-loader'], // Добавление стилей
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/, // Обработка изображений
        type: 'asset/resource', // Копирование файлов в папку сборки
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), // Шаблон HTML
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'), // Папка, из которой сервер отдаёт файлы
    historyApiFallback: true, // Поддержка React Router
    port: 4000, // Порт для разработки
    open: true, // Автоматическое открытие в браузере
  },
  mode: 'development', // Режим разработки
};
