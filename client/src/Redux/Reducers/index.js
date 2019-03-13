import { SWITCH_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP,
				 FETCH_ARTISTS_REQUEST, FETCH_ARTISTS_SUCCESS, 
				 FETCH_ARTISTS_ERROR, SEARCH_THROUGH_ARTISTS,
				 SORT_ARTISTS_ALPHABETICAL,
				 SORT_ARTISTS_REVERSE_ALPHABETICAL } from '../actionStrings';

import { searchThroughArtists, sortArtists } from '../helpers';
import { sortCriteriaEnum } from '../../Helpers/generalDataStructures';				 

// import artistReducer from './artistReducer';
// import UIReducer from './UIReducer';

//import { combineReducers } from 'redux';

// - Combine reducers here, export that to store.
//   Composition works here because when the root reducer 
//   is called, it goes down that return object and calls each
//   composed reducer, which themselves go through their logic, 
//   looking to see if the action matches an option they have.
// const rootReducer = (state = [], action) => {
// 	return {
// 		UI: UIReducer( state, action ),
// 		artist: artistReducer( state, action )
// 	}
// };

// const rootReducer = combineReducers({
// 	UI: UIReducer,
// 	artist: artistReducer
// });

const rootReducer = (state = [], action) => {
	// console.log('In root reducer');
	switch(action.type) {
		case SWITCH_THEME: {
			console.log('In switch theme option of reducer');
			const requestedTheme = action.theme;
			switch (requestedTheme) {
				case 'dark': {
					const newState = JSON.parse(JSON.stringify(state));
					// const newState = Object.assign({}, state);
					newState.settings.theme = 'dark';
					return newState;
				}
				case 'light': {
					const newState = JSON.parse(JSON.stringify(state));
					//const newState = Object.assign({}, state);
					newState.settings.theme = 'light';
					return newState;
				}
				default: return state;
			}
		}
		case TOGGLE_SIDE_MENU: {
			console.log('In toggle side menu option of reducer');
			const prevMenuState = state.settings.sideMenuOpen;
			const newState = JSON.parse(JSON.stringify(state));
			// const newState = Object.assign({}, state);
			newState.settings.sideMenuOpen = !prevMenuState;
			return newState;
		}
		case TOGGLE_BACKDROP: {
			console.log('In toggle backdrop option of reducer');
			const prevBackdropState = state.settings.backdropOpen;
			const newState = JSON.parse(JSON.stringify(state));
			//const newState = Object.assign({}, state);
			newState.settings.backdropOpen = !prevBackdropState;
			return newState;
		}
		case FETCH_ARTISTS_REQUEST: {
			//console.log('In fetch artists request option of reducer');
			const newState = JSON.parse(JSON.stringify(state));
			newState.isLoading = true;
			newState.loadStatus = 'LOADING';
			// return Object.assign({}, state, {
			// 	isLoading: true,
			// 	loadStatus: 'LOADING'
			// });
			return newState;
		}
		case FETCH_ARTISTS_ERROR: {
			//console.log('In fetch artists error option of reducer');
			const newState = JSON.parse(JSON.stringify(state));
			newState.isLoading = false;
			newState.loadState = 'ERROR';
			// return Object.assign({}, state, {
			// 	isLoading: false,
			// 	loadStatus: 'ERROR'
			// });
			return newState;
		}
		case FETCH_ARTISTS_SUCCESS: {
			//console.log('In fetch artists success option of reducer');
			const newState = JSON.parse(JSON.stringify(state));
			// return Object.assign({}, state, {
			// 	artists: action.artists,
			// 	isLoading: false,
			// 	loadStatus: 'READY'
			// });
			newState.artists = action.artists;
			newState.loading = false;
			newState.loadStatus = 'READY';
			return newState;
		}
		case SEARCH_THROUGH_ARTISTS: {
			console.log('In search through artists option of reducer');
			const displayedArtists = searchThroughArtists(action.queryText, state.artists);
			const newState = JSON.parse(JSON.stringify(state));
			newState.displayedArtists = displayedArtists;
			// return Object.assign({}, state, {
			// 	displayedArtists
			// });
			return newState;
		}
		case SORT_ARTISTS_ALPHABETICAL: {
			console.log('In sort artists alphabetical option of reducer');
			const artistsCopy = state.artists.slice();
			const sortedArtists = sortArtists(sortCriteriaEnum.ALPHABETICAL, artistsCopy);
			const newState = JSON.parse(JSON.stringify(state));
			newState.displayedArtists = sortedArtists;
			// return Object.assign({}, state, {
			// 	displayedArtists: sortedArtists
			// });
			return newState;
			
		}
		case SORT_ARTISTS_REVERSE_ALPHABETICAL: {
			console.log('In sort artists reverse alphabetical option of reducer');
			const artistsCopy = state.artists.slice();
			const sortedArtists = sortArtists(sortCriteriaEnum.REVERSE_ALPHABETICAL, artistsCopy);
			const newState = JSON.parse(JSON.stringify(state));
			newState.displayedArtists = sortedArtists;
			// return Object.assign({}, state, {
			// 	displayedArtists: sortedArtists
			// });
			return newState;
		}		
		default: return state; 				
	}
}

export default rootReducer;










