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
			  {/* These will have to be <Link>s when routing is set up. */}
				<div className={ styles.buttonGrid }>
					<OutlineButton
						text='Home'
						shape='rounded'
						onClick={ () => {} }
					/>	
					<OutlineButton
						text='About'
						shape='rounded'
						onClick={ () => {} }
					/>	
					<OutlineButton
						text='Documentation'
						shape='rounded'
						onClick={ () => {} }
					/>	
				</div>
				<h3 className={ themeClass }>Community Links</h3>
				<div className={ styles.hDividerCradle }>
					<HorizontalDivider height='3px'/>
				</div>
				<div className={ styles.communityLinks }>
					<div className={ styles.linkItem }>
						<div className={ styles.button }>
							<a
								href='https://www.facebook.com/groups/wav.city/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<OutlineButton
									text='Wave City'
									shape='rounded'
									onClick={ () => {} }
								/>
							</a>
						</div>
						<div className={ styles.label }>
							<h4 className={ themeClass }>Facebook Group</h4>
						</div>
					</div>
					<div className={ styles.linkItem }>
						<div className={ styles.button }>
							<a
								href='https://www.reddit.com/r/wavepool'
								target='_blank'
								rel='noopener noreferrer'
							>
								<OutlineButton
									text='/r/wavepool'
									shape='rounded'
									onClick={ () => {} }
								/>
							</a>
						</div>
						<div className={ styles.label }>
							<h4 className={ themeClass }>Reddit Group</h4>
						</div>
					</div>					
					<div className={ styles.linkItem }>
						<div className={ styles.button }>
							<a
								href='https://discordapp.com/invite/YFNVcyG'
								target='_blank'
								rel='noopener noreferrer'
							>
								<OutlineButton
									text='Wavepool'
									shape='rounded'
									onClick={ () => {} }
								/>
							</a>
						</div>
						<div className={ styles.label }>
							<h4 className={ themeClass }>Discord Server</h4>
						</div>
					</div>
					<div className={ styles.linkItem }>
						<div className={ styles.button }>
							<a
								href='https://discordapp.com/invite/theaccidentalpoet'
								target='_blank'
								rel='noopener noreferrer'
							>
								<OutlineButton
									text='The Accidental Poet'
									shape='rounded'
									onClick={ () => {} }
								/>
							</a>
						</div>
						<div className={ styles.label }>
							<h4 className={ themeClass }>Discord Server</h4>
						</div>
					</div>					
				</div>
			</div>
		);
	}
}

SideMenu.contextType = ThemeContext;

export default SideMenu;
