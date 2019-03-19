import ClassNames from 'classnames';

export const prepareComponent = ( context, props, styles ) => {
		
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const documentationItemClasses = ClassNames(styles.documentationItem, themeClass);

	return {
		documentationItemClasses
	};
};
