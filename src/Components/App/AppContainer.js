import { connect } from 'react-redux';
import actionCreators from '../../Redux/ActionCreators/actionCreators';
// import { bindActionCreators } from 'redux';

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
			console.log('in toggleSideMenu()');
			dispatch( actionCreators.toggleSideMenu() );
			dispatch( actionCreators.toggleBackdrop() );
		},
		// toggleBackdrop: () => (
		// 	dispatch( actionCreators.toggleBackDrop() )
		// ),
		searchThroughArtists: (queryText) => ( dispatch(actionCreators.searchThroughArtists(queryText)) ),
		sortArtistsAlphabetical: (direction) => ( dispatch(actionCreators.sortArtistsAlphabetical(direction)) ),
		sortArtistsReverseAlphabetical: (direction) => ( dispatch(actionCreators.sortArtistsReverseAlphabetical(direction)) ),
		switchArtistDisplayMode: (displayMode) => ( dispatch(actionCreators.switchArtistDisplayMode(displayMode)) ),
		loadArtists: () => ( dispatch(actionCreators.fetchArtists()) )
	}
);

// - Doesn't capture loadArtists (since it's an async action probably)
//const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App);

export default AppContainer;
