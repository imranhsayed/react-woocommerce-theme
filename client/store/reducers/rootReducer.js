import actions from "../actions/actions";

const initState = {
  user: {},
	products: {}
};

function rootReducer( state = initState, action ) {
  switch( action.type ) {
    case "USER" : return { user : action.user };
	  case "PRODUCT" : return { products : action.products };

    default: return state;
  }
}

export default rootReducer;
