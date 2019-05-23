const path = require( 'path' );
const merge = require( 'webpack-merge' );
const baseConfig = require( './webpack.base' );

const config = {
  target: "web",
  entry: "./client/index.js",
  output: {
    filename: "client.bundle.js",
    path: path.resolve( __dirname, "dist" )
  },
};

module.exports = merge( baseConfig, config );
