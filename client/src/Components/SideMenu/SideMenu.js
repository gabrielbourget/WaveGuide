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
import CircleDownIconDarkTheme from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme';
import CircleDownIconLightTheme from './SVG/CircleDownIcon/CircleDownIcon_LightTheme';
import CircleDownIconHighlighted from './SVG/CircleDownIcon/CircleDownIcon_Highlighted';
// - Circle Up Icon
import CircleUpIconDarkTheme from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme';
import CircleUpIconLightTheme from './SVG/CircleUpIcon/CircleUpIcon_LightTheme';
import CircleUpIconHighlighted from './SVG/CircleUpIcon/CircleUpIcon_Highlighted';

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
