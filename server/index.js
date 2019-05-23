import express from 'express';
import { template } from '../helper/template';
import store from '../client/store/store';
import { matchRoutes } from 'react-router-config';
import routes from '../client/routes';
import WooCommerceAPI from 'woocommerce-api';

const app = express();

// Set path for static files
app.use( express.static( 'dist' ) );

/**
 * Get All products
 */
app.get( '/getProducts', ( request, response ) => {
	var WooCommerce = new WooCommerceAPI({
		url: 'https://www.orionhive.com/',
		consumerKey: 'ck_c798f49c41c39bb5f4e57fe406d0a4180cabc499',
		consumerSecret: 'cs_0f5f4521779f5972c26af2a0d2adfdebccd71400',
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
