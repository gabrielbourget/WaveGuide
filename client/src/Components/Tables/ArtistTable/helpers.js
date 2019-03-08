import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles, state) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const artistTableClasses = ClassNames(styles.artistTable, themeClass);

	return {
		artistTableClasses
	};
};

