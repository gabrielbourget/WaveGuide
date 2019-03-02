import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'proptypes';
import { ThemeContext } from '../../ThemeContext';

import styles from './ProfileImage.module.scss';

class ProfileImage extends React.Component {

	// - TODO -> Create fallback SVG icon for missing src scenario.
	// static defaultProps = {
	// 	src: 'boop'
	// };

	render() {
		return (
			<div className="container">
				<img 
					src={ this.props.src } 
					alt={ this.props.image }
				/>
			</div>
		);
	}
}

ProfileImage.contextType = ThemeContext;

export default ProfileImage;
