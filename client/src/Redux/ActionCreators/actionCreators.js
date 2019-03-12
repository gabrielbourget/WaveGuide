import { TOGGLE_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP
				 FETCH_ARTISTS_REQUEST, FETCH_ARTIST_SUCCESS, 
				 FETCH_ARTISTS_ERROR, SEARCH_THROUGH_ARTISTS,
				 SORT_ARTISTS_ALPHABETICAL,
				 SORT_ARTISTS_REVERSE_ALPHABETICAL } from '../actionStrings';

import artists from '../../Datasets/artists';

// - UI
export const toggleTheme = () => { type: TOGGLE_THEME };
export const toggleSideMenu = () => { type: TOGGLE_SIDE_MENU };
export const toggleBackDrop = () => { type: TOGGLE_BACKDROP };

// - Fetching Artists
export const fetchArtistsRequest = () => { type: FETCH_ARTISTS_REQUEST };
export const fetchArtistsSuccess = () => { type: FETCH_ARTISTS_SUCCESS };
export const fetchArtistsError = () => { type: FETCH_ARTISTS_ERROR };

// - Manipulating Artists
export const searchThroughArtists = () => { type: SEARCH_THROUGH_ARTISTS };
export const sortArtistsAlphabetical = () => { type: SORT_ARTISTS_ALPHABETICAL };
export const sortArtistsReverseAlphabetical = () => { type: SORT_ARTISTS_REVERSE_ALPHABETICAL };

// - Async Thunk Action
export const fetchArtists = () => (
	(dispatch) => {
		dispatch(fetchArtistsRequest());
		APIClient.loadPeople()
			.then((artists) => { dispatch(fetchArtistsSuccess()); })
			.catch((err) => { dispatch(fetchArtistsError()); });
	};
);


// - Batch export.
const actionCreators = {
	toggleTheme,
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
				cb(artists || {})
			}, 1000) 
		}
	})
};









