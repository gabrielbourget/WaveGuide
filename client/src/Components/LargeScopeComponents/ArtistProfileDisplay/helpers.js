import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles, state) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const artistProfileDisplayClasses = ClassNames(styles.artistProfileDisplay, themeClass);
	const noResultsClasses = ClassNames(styles.noResults, themeClass);

	return {
		artistProfileDisplayClasses,
		noResultsClasses
	};
};
