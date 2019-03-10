import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './OutlineButton.module.scss';


class OutlineButton extends React.Component {

	handleClick = () => (
		this.props.onClick()
	);

	static propTypes = {
		text: PropTypes.string.isRequired
	};

	render() {
		// - Probe for important render-time information
		const shapeClass = (this.props.shape === 'rounded') ? styles.rounded : null;
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const floatClass = (this.props.float) ? styles.float : null;

		// - Put together class lists for pieces of the component
		const buttonClassNames = classNames(styles.button, shapeClass, themeClass, floatClass);
		const buttonTextClassNames = classNames(styles.buttonText, themeClass);

		return (
			<button 
				className={ buttonClassNames } 
				onClick={ this.handleClick }
			>
				<span className={ buttonTextClassNames }>
					{ this.props.text }
				</span>
			</button>
		);
	}
}

OutlineButton.contextType = ThemeContext;

export default OutlineButton;
