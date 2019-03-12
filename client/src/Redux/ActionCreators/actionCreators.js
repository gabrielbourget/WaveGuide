import TOGGLE_THEME from '../actionStrings';
import TOGGLE_SIDE_MENU from '../actionStrings';
import TOGGLE_BACKDROP from '../actionStrings';

export const toggleTheme = () => ({
	type: TOGGLE_THEME
});

export const toggleSideMenu = () => ({
	type: TOGGLE_SIDE_MENU
});

export const toggleBackDrop = () => ({
	type: TOGGLE_BACKDROP
});

const actionCreators = {
	toggleTheme,
	toggleSideMenu,
	toggleBackdrop
};

export default actionCreators;
