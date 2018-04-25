var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDebug = !process.argv.includes('--release');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  mode: 'production',
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    devFlagPlugin
  ],
  module: {
    rules: [
      { test: /\.css$/, use: 'style-loader' },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.js|jsx?$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react','es2015','stage-2'],
          plugins: [
            ...isDebug ? ['transform-decorators-legacy'] : [],
          ]
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
