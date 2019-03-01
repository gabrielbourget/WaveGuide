import React from 'react';
import styles from './ColumnWithPaddingPageCradle.module.scss';
import { ThemeContext } from '../../../ThemeContext';
import classNames from 'classnames';

class ColumnWithPaddingPageCradle extends React.Component {

	render() {

		// console.log(this.context);

		const classes = classNames(styles.cradle, ((this.context === 'dark') ? styles.darkTheme : styles.lightTheme));
		
		// const classes = classNames(styles.cradle, styles.darkTheme);

		return (
			<div className={ classes }>
				{ this.props.children }
			</div>
		);
	}

}

ColumnWithPaddingPageCradle.contextType = ThemeContext;

export default ColumnWithPaddingPageCradle;
