const webpack = require('webpack');
const Path = require('path');

module.exports = (env) => {
  const addPlugin = (add, plugin) => add ? plugin : undefined;
  const ifProd = (plugin) => addPlugin(env.prod, plugin);
  const removeEmptyPlugin = (array) => array.filter(p => !!p);

  return {
    entry: './src/index',
    resolve: {
      extensions: ['.js']
    },
    output: {
      path: Path.join(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: 'chunkArray'
    },
    devtool: 'source-map',
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ }
      ]
    },
    plugins: removeEmptyPlugin([
      ifProd(new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }))
    ])
  }
};

/*module.exports = {
  entry: './src/index',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: Path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'chunkArray',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ }
    ]
  }
}
*/