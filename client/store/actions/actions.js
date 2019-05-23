import axios from 'axios';

const actions = {
  getUserData : () => dispatch => {
    axios.get('https://api.github.com/users/imranhsayed')
      .then( userData => {
        dispatch({
          type: "USER",
          user : userData.data,
        })
      })
  },
	getProductsData : () => dispatch => {
		axios.get('/getProducts')
			.then( productData => {
				dispatch({
					type: "PRODUCT",
					products : productData.data,
				})
			})
	}
};

export default actions;
