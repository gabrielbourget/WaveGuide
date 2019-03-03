import React from 'react';
import ClassNames from 'classnames';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './TwoSizeCardGallery.module.scss';

class TwoSizeCardGallery extends React.Component {

	assignClasses = () => {
		const themeClass = (this.context === 'dark' ? styles.darkTheme : styles.lightTheme);
		const galleryClasses = ClassNames(styles.gallery, themeClass);

		return galleryClasses;
	};

	render() {
		return (
			<div className={ this.assignClasses() }>
				{ this.props.children }
			</div>
		);
	}
}

TwoSizeCardGallery.contextType = ThemeContext;

export default TwoSizeCardGallery;

