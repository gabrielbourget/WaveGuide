import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const documentationDisplayClasses = ClassNames(styles.documentationDisplay, themeClass);

	return {
		documentationDisplayClasses
	}
}
