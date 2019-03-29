import React from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './MiddleContentCradle.module.scss';

class MiddleContentCradle extends React.Component {

	render() {
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

		const classes = classNames(styles.cradle, themeClass);

		return (
			<div className={ classes }>
				{ this.props.children }
			</div>
		);
	}
}

MiddleContentCradle.contextType = ThemeContext;

export default MiddleContentCradle;
