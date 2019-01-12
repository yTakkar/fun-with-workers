const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { 
          loader: 'worker-loader', 
          options: { 
            publicPath: '/dist/',
            name: '[name].js'
          } 
        }
      }
    ]
  },
  mode: "development"
};