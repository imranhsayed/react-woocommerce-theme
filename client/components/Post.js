import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/actions';

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getUserData())
  }

  render() {
    return (
      <div>
        {
          this.props.user.login ? <p>{ this.props.user.login}</p> : <p>Loading...</p>
        }
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    user : state.user
  };
}

function loadData( store ) {
  return store.dispatch(actions.getUserData());
}

export default {
  component: connect( mapStateToProps )( Post ),
  loadData
};
