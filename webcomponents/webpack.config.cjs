const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [ 
          path.resolve(__dirname, 'src/**'), 
          path.resolve(__dirname, 'node_modules/lit-element/**'), 
          path.resolve(__dirname, 'node_modules/lit-html/**')
        ],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'lit-css-loader',
          options: {
            specifier: 'lit-element' // defaults to `lit`
          },
        },
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
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'webcomponents',
    libraryTarget: 'umd',
  },
  externals: {
    lit: 'lit',
  },
  optimization: {
    minimize: false
  },
};