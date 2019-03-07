import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './IconDisplay.module.scss';

class IconDisplay extends React.Component {

	static propTypes = {
		size: PropTypes.string
	};

	static defaultProps = {
		size: '30px'
	};

	render() {

		let icon;
		if (this.context === 'dark') icon = this.props.darkTheme;
		else icon = this.props.lightTheme;

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const displayClasses = ClassNames(styles.display, themeClass);

		const style = {
			width: this.props.size,
			height: this.props.size
		};

		return (
			<div 
				className={ displayClasses }
				style={ style }
			>
				{ icon }	
			</div>
		);
	}
}

IconDisplay.contextType = ThemeContext;

export default IconDisplay;
