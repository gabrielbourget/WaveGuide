import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ProfileImage.module.scss';

class ProfileImage extends React.Component {

	// - TODO -> Create fallback SVG icon for missing src scenario.
	// static defaultProps = {
	// 	src: 'boop'
	// };

	render() {
		return (
			<img 
				src={ this.props.imagePath } 
				alt={ this.props.title }
			/>
		);
	}
}

ProfileImage.contextType = ThemeContext;

export default ProfileImage;
