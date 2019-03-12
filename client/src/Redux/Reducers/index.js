import {TOGGLE_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP } from '../actionStrings';

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

const rootReducer = (state = [], action) => {
	switch (action.type) {
		default: { return state }
	}
};

export default rootReducer;
