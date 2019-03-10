import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import styles from './SideMenu.module.scss';

import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';

class SideMenu extends React.Component {

	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const openClass = (this.props.open) ? styles.open : null;
		const sideMenuClasses = ClassNames(styles.sideMenu, themeClass, openClass);

		//console.log(getComputedStyle(document.documentElement).getPropertyValue('--boxShadowDarkTheme'));

		return (
			<div className={ sideMenuClasses } >
				<h3 className={ themeClass }>Settings</h3>
				<div className={ styles.hDividerCradle }>
					<HorizontalDivider height='3px'/>
				</div>
				<div className={ styles.themePick }>
					<div className={ styles.label }>
						<h4>Theme</h4>
					</div>
					<div className={ styles.optionButton }>
						<OutlineButton
							text='DARK'
							shape='rounded'
							onClick={ () => this.props.onThemeSwitch('dark') }
						/>
					</div>
					<div className={ styles.optionButton }>
						<OutlineButton 
							text='LIGHT'
							shape='rounded'
							onClick={ () => this.props.onThemeSwitch('light') }
						/>
					</div>					
				</div>
				<h3 className={ themeClass }>Site Navigation</h3>
				<div className={ styles.hDividerCradle }>
					<HorizontalDivider height='3px'/>
				</div>
				<h3 className={ themeClass }>Community Links</h3>
				<div className={ styles.hDividerCradle }>
					<HorizontalDivider height='3px'/>
				</div>
			</div>
		);
	}
}

SideMenu.contextType = ThemeContext;

export default SideMenu;
