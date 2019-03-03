import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './CircleButton.module.scss';

class CircleButton extends React.Component {

	state = {
		highlighted: true
	};

	handleMouseEnter = (e) => {
		e.stopPropagation();
		console.log('mouseover');
		this.setState({ highlighted: true });
	};

	handleMouseLeave = (e) => {
		e.stopPropagation();
		console.log('mouseout')
		this.setState({ highlighted: false });
	};

	handleMouseClick = (e) => {
		e.stopPropagation();
		console.log('clicked');
		this.props.onClick();
	};

	renderButton = () => {

		let icon;

		if (this.state.highlighted) icon = this.props.highlighted;
		if (this.context === 'dark') icon = this.props.darkTheme;
		else icon = this.props.lightTheme;
		
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const buttonClasses = ClassNames(styles.button, themeClass);

		// console.log(icon);

		return (
			<button 
				className={ buttonClasses }
				onMouseEnter={ this.handleMouseEnter }
				onMouseLeave={ this.handleMouseLeave }
				onClick={ this.handleMouseClick }
			>
				{ icon }
			</button>
		);
		
	}

	render() {
		return this.renderButton();
	}
}

CircleButton.contextType = ThemeContext;

export default CircleButton;
