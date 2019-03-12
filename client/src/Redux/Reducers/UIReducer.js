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

export default UIReducer;
