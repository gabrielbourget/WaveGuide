import React from 'react';
import ClassNames from 'classnames';
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import styles from './SideMenu.module.scss';
import { communityLinks } from './Data/communityLinks'

import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';
import CircleButton from '../Buttons/CircleButton/CircleButton';
import CommunityLinks from './CommunityLinks/CommunityLinks';

// - Circle Down Icon
import { ReactComponent as CircleDownIconDarkTheme } from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme.svg';
import { ReactComponent as CircleDownIconLightTheme } from './SVG/CircleDownIcon/CircleDownIcon_LightTheme.svg';
import { ReactComponent as CircleDownIconHighlighted } from './SVG/CircleDownIcon/CircleDownIcon_Highlighted.svg';
// - Circle Up Icon
import { ReactComponent as CircleUpIconDarkTheme } from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme.svg';
import { ReactComponent as CircleUpIconLightTheme } from './SVG/CircleUpIcon/CircleUpIcon_LightTheme.svg';
import { ReactComponent as CircleUpIconHighlighted } from './SVG/CircleUpIcon/CircleUpIcon_Highlighted.svg';

class SideMenu extends React.Component {

	state = {
		communityLinksExpanded: false
	};

	// - Trigger a card expansion.
	handleDownIconClick = () => {
		this.setState({ communityLinksExpanded: true });
	};

	// - Trigger a card retraction.
	handleUpIconClick = () => {
		this.setState({ communityLinksExpanded: false });
	};	

	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const openClass = (this.props.open) ? styles.open : null;
		const sideMenuClasses = ClassNames(styles.sideMenu, themeClass, openClass);

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
				<div className={ styles.communityLinksTitleBar }>
					<h3 className={ themeClass }>Community Links</h3>
					<div className={ styles.expandCollapseButton }>
						{
							this.state.communityLinksExpanded ?
							<CircleButton 
								size='25px'
								highlighted={ <CircleUpIconHighlighted/> }
								darkTheme={ <CircleUpIconDarkTheme/> }
								lightTheme={ <CircleUpIconLightTheme/> }
								onClick={ this.handleUpIconClick }
							/> :
							<CircleButton 
								size='25px'
								highlighted={ <CircleDownIconHighlighted/> }
								darkTheme={ <CircleDownIconDarkTheme/> }
								lightTheme={ <CircleDownIconLightTheme/> }
								onClick={ this.handleDownIconClick }
							/>
						}
					</div>
				</div>
				<div className={ styles.hDividerCradle }>
					<HorizontalDivider height='3px'/>
				</div>
				{
					this.state.communityLinksExpanded ?
						<CommunityLinks communityLinks={ communityLinks }/>	:
						null
				}
			</div>
		);
	}
}

SideMenu.contextType = ThemeContext;

export default SideMenu;
