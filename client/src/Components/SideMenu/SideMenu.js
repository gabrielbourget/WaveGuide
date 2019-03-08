import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import styles from './SideMenu.module.scss';

class SideMenu extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const openClass = (this.props.open) ? styles.open : null;
		const sideMenuClasses = ClassNames(styles.sideMenu, themeClass, openClass);

		return (
			<div className={ sideMenuClasses } >
				<h3 className={ themeClass }>Settings</h3>
				<h3 className={ themeClass }>Site Navigation</h3>
			</div>
		);
	}
}

SideMenu.contextType = ThemeContext;

export default SideMenu;
