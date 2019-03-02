import React from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './FilledButton.module.scss';

class FilledButton extends React.Component {

	handleClick = () => {
		this.props.onClick();
	};

	render() {
		// - Probe for important render-time information.
		const shapeClass = (this.props.shape === 'rounded') ? styles.rounded : null
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

		// - Put together class lists for pieces of the component.
		const buttonClassNames = classNames(styles.button, shapeClass, themeClass);
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

FilledButton.contextType = ThemeContext;

export default FilledButton;
