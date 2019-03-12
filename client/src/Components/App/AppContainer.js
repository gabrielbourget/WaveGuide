import React from 'react';
import { connect } from 'react-redux';
import actionCreators from './ActionCreators/actionCreators';

import App from './App';

const mapStateToProps = (state) => ({
	artists: state.artists
});

const mapDispatchToProps = (dispatch) => (
	{
		// - Write in handler functions that get passed into App component
		//   as props. These will dispatch actions to the reducers, which
		//   will update the state. 
	}
);

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App);

export default AppContainer;
