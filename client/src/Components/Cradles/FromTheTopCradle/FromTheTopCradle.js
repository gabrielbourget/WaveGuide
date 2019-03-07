import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './FromTheTopCradle.module.scss';

class FromTheTopCradle extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const cradleClasses = ClassNames(styles.cradle, themeClass);

		return (
			<div className={ cradleClasses }>
				{ this.props.children }
			</div>
		);
	}
}

FromTheTopCradle.contextType = ThemeContext;

export default FromTheTopCradle;
