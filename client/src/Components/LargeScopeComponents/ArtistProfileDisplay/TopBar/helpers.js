import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles, state) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const topBarClasses = ClassNames(styles.topBar, themeClass);

	return {
		topBarClasses
	};
};

