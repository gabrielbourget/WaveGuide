import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const tableOfContentsClasses = ClassNames(styles.tableOfContents, themeClass);
	const navButtonsClasses = ClassNames(styles.navButtons, themeClass);

	return {
		tableOfContentsClasses,
		navButtonsClasses
	};
}
