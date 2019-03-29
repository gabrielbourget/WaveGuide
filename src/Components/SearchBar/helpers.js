import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles, state) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const activeClass = (state.active) ? styles.active : null;

	const searchBarClasses = ClassNames(styles.searchBar, themeClass, activeClass);
	const searchInputClasses = ClassNames(styles.searchInput, themeClass);

	return {
		searchBarClasses,
		searchInputClasses
	};
};
