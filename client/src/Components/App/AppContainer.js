import { connect } from 'react-redux';
import actionCreators from '../../Redux/ActionCreators/actionCreators';
// import { bindActionCreators } from 'redux';

import App from './App';

// console.log(actionCreators);

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
			console.log('in toggleSideMenu()');
			dispatch( actionCreators.toggleSideMenu() );
			dispatch( actionCreators.toggleBackdrop() );
		},
		// toggleBackdrop: () => (
		// 	dispatch( actionCreators.toggleBackDrop() )
		// ),
		searchThroughArtists: (queryText) => {
			console.log('in searchThroughArtists()');
			dispatch( actionCreators.searchThroughArtists(queryText) );
		},
		sortArtistsAlphabetical: (direction) => {
			console.log('in sortArtistsAlphabetical()');
			dispatch( actionCreators.sortArtistsAlphabetical(direction) );
		},
		sortArtistsReverseAlphabetical: (direction) => {
			console.log('in sortArtistsReverseAlphabetical()');
			dispatch( actionCreators.sortArtistsReverseAlphabetical(direction) );
		},
		switchArtistDisplayMode: (displayMode) => {
			console.log('in switchArtistDisplayMode()');
			dispatch( actionCreators.switchArtistDisplayMode(displayMode) );
		},
		loadArtists: () => {
			console.log('in loadArtists()');
			dispatch( actionCreators.fetchArtists() );
		}		
	}
);

// - Doesn't capture loadArtists (since it's an async action probably)
//const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App);

export default AppContainer;
