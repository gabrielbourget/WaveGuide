import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'proptypes';
import { ThemeContext } from '../../ThemeContext';

import styles from './ProfileImage.module.scss';



class ProfileImage extends React.Component {
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

// - TODO -> Create fallback SVG icon for missing src scenario.
ProfileImage.defaultProps = {
	src: 'boop'
}

ProfileImage.contextType = ThemeContext;

export default ProfileImage;
