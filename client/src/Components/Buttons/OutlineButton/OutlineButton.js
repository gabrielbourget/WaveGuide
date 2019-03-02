import React, { Component } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './OutlineButton.module.scss';


class OutlineButton extends Component {

	handleClick = () => (
		this.props.onClick()
	);

	render() {

		// - Probe for important render-time information
		const shapeClass = (this.props.shape === 'rounded') ? styles.rounded : null;
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

		// - Put together class lists for pieces of the component
		const buttonClassNames = classNames(styles.button, shapeClass, themeClass);
		const buttonTextClassNames = classNames(styles.buttonText, themeClass);

		return (
			<button 
				className= { buttonClassNames } 
				onClick={ this.handleClick }
			>
				<span className={ styles.buttonText }>
					{ this.props.text }
				</span>
			</button>
		);
	}
}

export default OutlineButton;
