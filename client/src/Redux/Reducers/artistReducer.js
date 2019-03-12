import { searchThroughArtists, sortArtists } from '../helpers';

const artistReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_ARTISTS_REQUEST: {
			return Object.assign({}, state, {
				isLoading: true,
				loadStatus: 'LOADING'
			});
		}
		case FETCH_ARTISTS_ERROR: {
			return Object.assign({}, state, {
				isLoading: false,
				loadStatus: 'ERROR'
			});
		}
		case FETCH_ARTISTS_SUCCESS: {
			return Object.assign({}, state, {
				artists: action.artists,
				isLoading: false,
				loadStatus: 'READY'
			});
		}
		case SEARCH_THROUGH_ARTISTS: {
			const displayedArtists = searchThroughArtists(action.queryText, state.artists);
			return Object.assign({}, state, {
				displayedArtists
			});
		}
		case SORT_ARTISTS_ALPHABETICAL: {
			const artistsCopy = state.artists.slice();
			const sortedArtists = sortArtists(sortCriteriaEnum.ALPHABETICAL, artistsCopy);
			return Object.assign({}, state, {
				displayedArtists: sortedArtists
			});
		}
		case SORT_ARTISTS_REVERSE_ALPHABETICAL: {
			const artistsCopy = state.artists.slice();
			const sortedArtists = sortArtists(sortCriteriaEnum.REVERSE_ALPHABETICAL, artistsCopy);
			return Object.assign({}, state, {
				displayedArtists: sortedArtists
			});
		}
		default: return state;
	}
};

export default artistReducer;
