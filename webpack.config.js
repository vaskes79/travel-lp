const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[contenthash:8].bundle.js',
  },
  devtool: isDevelopment && 'source-map',
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
    contentBase: path.join(__dirname, 'src'),
  },
  optimization: isDevelopment
    ? {}
    : {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
      },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browser: ['last 5 versions'],
              },
              sourceMap: isDevelopment,
              plugins: () => [autoprefixer],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash:8].[name].[ext]',
              outputPath: 'static/',
              useRelativePath: true,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {},
      },
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : 'css/[hash:8].[name].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash:8].css',
    }),
    new HtmlWebpackPlugin({
      title: 'My Landing boilerplate',
      template: './src/index.pug',
      minify: !isDevelopment && {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
        removeEmptyElements: true,
      },
    }),
  ],
};
