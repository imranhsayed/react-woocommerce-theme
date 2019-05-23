const path = require( 'path' );
const merge = require( 'webpack-merge' );
const baseConfig = require( './webpack.base' );
const webpackNodeExternals = require( 'webpack-node-externals' );

const config = {
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "server.bundle.js",
    path: path.resolve( __dirname, "dist" )
  },
  externals: [ webpackNodeExternals() ]
};

module.exports = merge( baseConfig, config );
