import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../../Redux/ActionCreators/actionCreators';

import App from './App';

const mapStateToProps = (state) => ({
	settings: state.settings,
	isLoading: state.isLoading,
	artists: state.artists,
	displayedArtists: state.displayedArtists
});

const mapDispatchToProps = (dispatch) => (
	{
		switchTheme: (theme) => (
			dispatch( actionCreators.switchTheme(theme) )
		),
		toggleSideMenu: () => {
			dispatch( actionCreators.toggleSideMenu() );
			dispatch( actionCreators.toggleBackdrop() );
		},
		searchThroughArtists: (queryText) => (
			dispatch( actionCreators.searchThroughArtists(queryText) )
		),
		sortArtistsAlphabetical: (direction) => (
			dispatch( actionCreators.sortArtistsAlphabetical(direction) )
		),
		sortArtistsReverseAlphabetical: (direction) => (
			dispatch( actionCreators.sortArtistsReverseAlphabetical(direction) )
		),
		loadArtists: () => (
			dispatch( actionCreators.fetchArtists() )
		)		
	}
);

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App);

export default AppContainer;
