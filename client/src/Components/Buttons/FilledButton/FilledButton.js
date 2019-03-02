import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './FilledButton.module.scss';

class FilledButton extends React.Component {

	handleClick = () => {
		this.props.onClick();
	};

	static propTypes = {
		text: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	};

	render() {
		// - Probe for important render-time information.
		const shapeClass = (this.props.shape === 'rounded') ? styles.rounded : null
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

		// - Put together class lists for pieces of the component.
		const buttonClassNames = ClassNames(styles.button, shapeClass, themeClass);
		const buttonTextClassNames = ClassNames(styles.buttonText, themeClass);

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
