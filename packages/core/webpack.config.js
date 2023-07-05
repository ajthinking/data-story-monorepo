const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './dist/server/socket.js', // Path to your main js file, check this is right
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js' // Where the bundle will be output
  },
  target: 'node', // IMPORTANT: This is required for webpack-node-externals to work
  // externals: [nodeExternals()], // IMPORTANT: This is required for webpack-node-externals to work
  mode: 'development' // Use 'production' or 'development' mode
};