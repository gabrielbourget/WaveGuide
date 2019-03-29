import { SWITCH_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP } from '../actionStrings';

const UIReducer = (state = [], action) => {
	switch (action.type) {
		case SWITCH_THEME: {
			const requestedTheme = action.theme;
			switch (requestedTheme) {
				case 'dark': {
					const newState = Object.assign({}, state);
					newState.settings.theme = 'dark';
					return newState;
				}
				case 'light': {
					console.log('original state');
					console.log(state);
					const newState = Object.assign({}, state);
					console.log('newstate');
					console.log(newState);					
					newState.settings.theme = 'light';
					return newState;
				}
				default: return state;
			}
		}
		// - Figure out what state the menu is in.
		//   Return copy of state with that menu state
		//   toggled.
		case TOGGLE_SIDE_MENU: {
			const prevMenuState = state.settings.sideMenuOpen;
			const newState = Object.assign({}, state);
			newState.settings.sideMenuOpen = !prevMenuState;
			return newState;
		}
		case TOGGLE_BACKDROP: {
			const prevBackdropState = state.settings.backdropOpen;
			const newState = Object.assign({}, state);
			newState.settings.backDropOpen = !prevBackdropState;
			return newState;
		}
		default: return state; 
	}
};

export default UIReducer;
