const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    watchFiles: ['src/**/*'],
    open: true,
  },
});