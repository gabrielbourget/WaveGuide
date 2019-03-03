import React from 'react';
import ClassNames from 'classnames';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './CircleButton.module.scss';

// - Problems: 
//   1. Hover to toggle highlighted button icon from theme one is 
//      spilling over to effect adjascent circle buttons on the twosizecards. 
//      
//      Solution for now: Don't toggle highlighted buttons, leave that as 
//      nice to have functionality.

class CircleButton extends React.Component {

	state = {
		highlighted: false
	};

	handleMouseEnter = (e) => {
		e.stopPropagation();
		//this.setState({ highlighted: true });
	};

	handleMouseLeave = (e) => {
		e.stopPropagation();
		//this.setState({ highlighted: false });
	};

	handleMouseClick = (e) => {
		e.stopPropagation();
		this.props.onClick();
	};

	renderButton = () => {

		let icon;

		if (this.state.highlighted) icon = this.props.highlighted;
		else {
			if (this.context === 'dark') icon = this.props.darkTheme;
			else icon = this.props.lightTheme;			
		}		
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
