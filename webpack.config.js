var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

// var path = require('path');
// module.exports = {
//   entry: [
//     './src/index.js'
//   ],
//   output: {
//     path: path.join(__dirname, 'public'),
//     publicPath: '/public/',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       exclude: /node_modules/,
//       loader: 'babel',
//       query: {
//         presets: ['react', 'es2015', 'stage-1']
//       }
//     }]
//   },
//   plugins: [
//         new webpack.ProvidePlugin({
//            $: "jquery",
//            jQuery: "jquery"
//        })
//   ],
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './'
//   }
// };
