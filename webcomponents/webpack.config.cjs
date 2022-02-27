const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['lit-css-loader'],
        options: {
          specifier: 'lit-element' // defaults to `lit`
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css'],
    modules: ['src', 'node_modules'],
    alias: {
      Styles: path.resolve(__dirname, 'src/styles'),
      Components: path.resolve(__dirname, 'src/components'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shared-components.js',
    library: 'sharedComponents',
    libraryTarget: 'umd',
  },
  externals: {
    lit: 'lit',
  },
  optimization: {
    minimize: false
  },
};