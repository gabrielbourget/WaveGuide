import { SWITCH_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP,
				 FETCH_ARTISTS_REQUEST, FETCH_ARTISTS_SUCCESS, 
				 FETCH_ARTISTS_ERROR, SEARCH_THROUGH_ARTISTS,
				 SORT_ARTISTS_ALPHABETICAL,
				 SORT_ARTISTS_REVERSE_ALPHABETICAL } from '../actionStrings';

import artists from '../../Datasets/artists';

// - UI
export const switchTheme = (theme) => ({ 
	type: SWITCH_THEME,
	theme
});
export const toggleSideMenu = () => ({ type: TOGGLE_SIDE_MENU });
export const toggleBackdrop = () => ({ type: TOGGLE_BACKDROP });

// - Fetching artists
export const fetchArtistsRequest = () => ({ type: FETCH_ARTISTS_REQUEST });
export const fetchArtistsSuccess = (artists) => ({ 
	type: FETCH_ARTISTS_SUCCESS,
	artists 
});
export const fetchArtistsError = (error) => ({ 
	type: FETCH_ARTISTS_ERROR,
	error
});

// - Manipulating artists
export const searchThroughArtists = (queryText) => ({ 
	type: SEARCH_THROUGH_ARTISTS,
	queryText
});
export const sortArtistsAlphabetical = () => ({ type: SORT_ARTISTS_ALPHABETICAL });
export const sortArtistsReverseAlphabetical = () => ({ type: SORT_ARTISTS_REVERSE_ALPHABETICAL });

// - Async Thunk action
export const fetchArtists = () => (
	(dispatch) => {
		debugger;
		dispatch(fetchArtistsRequest());
		APIClient.loadPeople()
			.then((artists) => { dispatch(fetchArtistsSuccess(artists)); });
	}
);

// - Batch export.
 const actionCreators = {
	switchTheme,
	toggleSideMenu,
	toggleBackdrop,
	fetchArtistsRequest,
	fetchArtistsSuccess,
	fetchArtistsError,
	searchThroughArtists,
	sortArtistsAlphabetical,
	sortArtistsReverseAlphabetical,
	fetchArtists	
 };

export default actionCreators;

// - If hooked up to a live server and remote database, 
//   this would be an async CYPHER query made over a 
//   database connection. For now, just draw from static 
//   object of artists. 
const APIClient = {
	loadPeople: () => ({
		then: (callBack) => {
			setTimeout( () => {
				callBack(artists || {}) // - Send through empty object if nothing comes back.
			}, 1000) 
		}
	})
};









