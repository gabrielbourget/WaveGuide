import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles, state) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const artistTableClasses = ClassNames(styles.artistTable, themeClass);
	const tableHeaderClasses = ClassNames(styles.tableHeader, themeClass);
	const tableBodyClasses = ClassNames(styles.tableBody, themeClass);
	const tableFooterClasses = ClassNames(styles.tableFooter, themeClass);

	return {
		artistTableClasses,
		tableHeaderClasses,
		tableBodyClasses,
		tableFooterClasses
	};
};

