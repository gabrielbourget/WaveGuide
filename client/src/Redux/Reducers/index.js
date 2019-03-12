import { TOGGLE_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP
				 FETCH_ARTISTS_REQUEST, FETCH_ARTIST_SUCCESS, 
				 FETCH_ARTISTS_ERROR, SEARCH_THROUGH_ARTISTS,
				 SORT_ARTISTS_ALPHABETICAL,
				 SORT_ARTISTS_REVERSE_ALPHABETICAL } from '../actionStrings';

const UIReducer = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_THEME: {
			break;
		}
		case TOGGLE_SIDE_MENU: {
			break;
		}
		case TOGGLE_BACKDROP: {
			break;
		}
		default: { return state }
	}
};

const artistReducer = (state = [], action) => {
	switch (action.type) {
		default: { return state }
	}
};

const rootReducer = (state = [], action) => {
	switch (action.type) {
		default: { return state }
	}
};

export default rootReducer;
