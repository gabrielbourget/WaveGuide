import ClassNames from 'classnames';

export const prepareComponent = (context, props, styles) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const tableItemClasses = ClassNames(styles.tableItem, themeClass);
	const profileImageClasses = ClassNames(styles.profileImage, themeClass);
	const imageCradleClasses = ClassNames(styles.imageCradle, themeClass);
	const titleClasses = ClassNames(styles.title, themeClass);
	const socialLinksClasses = ClassNames(styles.socialLinks, themeClass);

	return {
		tableItemClasses,
		profileImageClasses,
		imageCradleClasses,
		titleClasses,
		socialLinksClasses
	};
};
