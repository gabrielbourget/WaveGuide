import ClassNames from 'classnames';

export const prepareComponent = ( context, props, styles ) => {
		
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const documentationTreeClasses = ClassNames(styles.documentationTree, themeClass);

	return {
		documentationTreeClasses
	};
};
