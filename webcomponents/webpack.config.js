const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'kobo-components.js', // the filename in dist where the package will be
    library: {
      name: 'koboComponents', // allows users to use the package through script tag
      type: 'umd', // bundles in such a way that can work with CommonJS, AMD, and script tag
    }
  },
  // ideally would have external dependencies listed here
  // but can't import for some reason
  // externals: { // treat external packages as peer dependencies instead of bundling with the code
  //   lit: 'lit'
  // },
  optimization: {
    minimize: false, // users can minimize it when they import
  }
};