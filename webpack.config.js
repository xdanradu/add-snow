module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'add-snow.js',
    library: 'snow',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: 'css-content-loader'
      }
    ]
  }
};
