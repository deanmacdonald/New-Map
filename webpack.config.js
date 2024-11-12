const path = require('path');

module.exports = {
  // Set the mode to production or development
  mode: 'production', // Change to 'development' if needed

  // Enable detailed error information
  stats: {
    errorDetails: true,
  },

  // Entry point of your application
  entry: './public/js/app.js',

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },

  // Module rules
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // Resolve configuration with fallbacks
  resolve: {
    fallback: {
      'node:url': false, // or use a polyfill if needed
      url: require.resolve('url/'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
    },
  },
};
