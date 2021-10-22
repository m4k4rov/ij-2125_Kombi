let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,

  devtool: "source-map"
};
