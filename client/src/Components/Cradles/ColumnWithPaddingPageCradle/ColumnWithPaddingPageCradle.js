import React from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ColumnWithPaddingPageCradle.module.scss';

class ColumnWithPaddingPageCradle extends React.Component {

	render() {

		const classes = classNames(styles.cradle, ((this.context === 'dark') ? styles.darkTheme : styles.lightTheme));

		return (
			<div className={ classes }>
				{ this.props.children }
			</div>
		);
	}

}

ColumnWithPaddingPageCradle.contextType = ThemeContext;

export default ColumnWithPaddingPageCradle;
