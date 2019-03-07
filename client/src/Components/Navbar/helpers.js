import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles, state) => {
	
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const activeClass = (state.active) ? styles.active : null;

	const navbarClasses = ClassNames(styles.navbar, themeClass, activeClass);

	const sideMenuButtonClasses = ClassNames(styles.sideMenuButton, themeClass);

	const rightNavClasses = ClassNames(styles.rightNav, themeClass);

	return {
		navbarClasses,
		sideMenuButtonClasses,
		rightNavClasses
	};
};
