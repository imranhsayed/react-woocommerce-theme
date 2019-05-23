import express from 'express';
import { template } from '../helper/template';
import store from '../client/store/store';
import { matchRoutes } from 'react-router-config';
import routes from '../client/routes';
import WooCommerceAPI from 'woocommerce-api';
import config from '../config';

const app = express();

// Set path for static files
app.use( express.static( 'dist' ) );

/**
 * Get All products
 */
app.get( '/getProducts', ( request, response ) => {
	var WooCommerce = new WooCommerceAPI({
		url: 'https://www.orionhive.com/',
		consumerKey: config.consumerKey,
		consumerSecret: config.consumerSecret,
		wpAPI: true,
		version: 'wc/v3'
	});

	WooCommerce.get('products', function(err, data, res) {
		response.json( JSON.parse(res) );
	});
} );

app.get( '*', ( req, res ) => {

  // MATCHING ROUTES FOR FETCHING DATA
  const promises = matchRoutes( routes, req.path ).map( ( { route } ) => {
    return route.loadData ? route.loadData( store ) : null;
  });

  Promise.all( promises ).then(() => {
    res.send( template( req.path, store ) )
  });
});


app.listen( 3000, ( err ) => {
  console.log( `Server is running on http://localhost:3000` );
});
