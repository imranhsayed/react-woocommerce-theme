import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/actions';

class Products extends Component {
	componentDidMount() {
		  this.props.dispatch( actions.getProductsData() );
	}

	render() {
		const { products } = this.props;
		console.warn( products );
		return (
			<div>
				{ products.length && (
					products.map( item => <h2 key={item.id}>{ item.name }</h2> )
				) }
			</div>
		);
	}
}

function mapStateToProps( state ) {
	return {
		products : state.products
	};
}

function loadData( store ) {
	return store.dispatch(actions.getProductsData());
}

export default {
	component: connect( mapStateToProps )( Products ),
	loadData
};
