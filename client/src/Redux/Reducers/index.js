import { TOGGLE_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP
				 FETCH_ARTISTS_REQUEST, FETCH_ARTIST_SUCCESS, 
				 FETCH_ARTISTS_ERROR, SEARCH_THROUGH_ARTISTS,
				 SORT_ARTISTS_ALPHABETICAL,
				 SORT_ARTISTS_REVERSE_ALPHABETICAL } from '../actionStrings';

const UIReducer = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_THEME: {
			const requestedTheme = action.theme;
			switch (requestedTheme) {
				case 'dark': {
					return Object.assign({}, state, {
						settings.theme: 'dark'
					});
				}
				case 'light': {
					return Object.assign({}, state, {
						settings.theme: 'light'
					});
				}
				default: return state;
			}
			break;
		}
		// - Figure out what state the menu is in.
		//   Return copy of state with that menu state
		//   toggled.
		case TOGGLE_SIDE_MENU: {
			const prevMenuState = this.state.settings.sideMenuOpen;
			return Object.assign({}, state, {
        settings.sideMenuOpen: !prevMenuState
      });
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
	return {
		UI: UIReducer( state, action ),
		artist: artistReducer( state, action )
	}
};

export default rootReducer;
