import TOGGLE_THEME from '../actionStrings';
import TOGGLE_SIDE_MENU from '../actionStrings';

const UIReducer = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_THEME: {
			break;
		}
		case TOGGLE_SIDE_MENU: {
			break;
		}
		default: { return state }
	}
};
