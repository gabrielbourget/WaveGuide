import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import styles from './Navbar.module.scss';
import { prepareComponent } from './helpers';

import CircleButton from '../Buttons/CircleButton/CircleButton';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';
import SearchBarWithRouter from '../SearchBar/SearchBar';



// - Hamburger Menu Icon
import { ReactComponent as HamburgerMenuDarkTheme } from './SVG/HamburgerMenu/HamburgerIconDarkTheme.svg';
import { ReactComponent as HamburgerMenuLightTheme } from './SVG/HamburgerMenu/HamburgerIconLightTheme.svg';
import { ReactComponent as HamburgerMenuHighlighted } from './SVG/HamburgerMenu/HamburgerIconHighlighted.svg';
// - X Icon
import { ReactComponent as XIconDarkTheme } from './SVG/XIcon/XIconDarkTheme.svg';
import { ReactComponent as XIconLightTheme } from './SVG/XIcon/XIconLightTheme.svg';
import { ReactComponent as XIconHighlighted } from './SVG/XIcon/XIconHighlighted.svg';
// - Home Icon
import HomeIconDarkTheme from './SVG/HomeIcon/HomeIconDarkTheme';
import HomeIconLightTheme from './SVG/HomeIcon/HomeIconLightTheme';
import HomeIconHighlighted from './SVG/HomeIcon/HomeIconHighlighted';

class Navbar extends React.Component {

	// - Once this depends on redux state, the menu and x icon button will sync up
	// 	 to clicking the backdrop to close the menu. 
	state = {
		menuActive: false
	};

	static propTypes = {
		onSideMenuButtonClick: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired		
	};

	handleSideMenuButtonClick = () => {
		this.props.onSideMenuButtonClick();
		// - This logic gets removed once redux is online.
		// const prevState = this.state;
		// this.setState((prevState) => (
		// 	{ menuActive: !prevState.menuActive }
		// ));
	};

	pushToHome = () => {
		// - Logic to push history to home page and prompt routing change at top level. 
	};

	// pushToAbout = () => {
	// 	// - Logic to push history to home page and prompt routing change at top level. 
	// };

	pushToDocumentation = () => {
		// - Logic to push history to home page and prompt routing change at top level. 
	}

	render() {

		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.navbarClasses }>
				<div className={ initObject.sideMenuButtonClasses }>
					{
						//  - OLD -> this.state.menuActive ?
						this.props.sideMenuOpen ? 
						<CircleButton 
							size='20px'
							darkTheme={ <XIconDarkTheme/> }
							lightTheme={ <XIconLightTheme/> }
							highlighted={ <XIconHighlighted/> }
							onClick={ this.handleSideMenuButtonClick }
						/> :
						<CircleButton 
							size='20px'
							darkTheme={ <HamburgerMenuDarkTheme/> }
							lightTheme={ <HamburgerMenuLightTheme/> }
							highlighted={ <HamburgerMenuHighlighted/> }
							onClick={ this.handleSideMenuButtonClick }
						/>						
					}

				</div>
				<SearchBarWithRouter
					// - Active once redux is set up.
					searchThroughArtists={ this.props.searchThroughArtists }
					defaultText='Search by artist name. Search "Everyone" to return all artists.'
				/>
				<div className={ initObject.rightNavClasses }>

					<Link to ='/'>
						<CircleButton
							size='25px'
							darkTheme={ <HomeIconDarkTheme/> }
							lightTheme={ <HomeIconLightTheme/> }
							highlighted={ <HomeIconHighlighted/> }
							onClick={ () => this.pushToHome() } 
						/>
					</Link>

					<Link to='/documentation'>
						<OutlineButton 
							text='Documentation'
							onClick={ () => this.pushToDocumentation() }
							shape='rounded'
						/>
					</Link>
				</div>
			</div>
		);
	}
}

Navbar.contextType = ThemeContext;

const NavbarWithRouter = withRouter(Navbar);

export default NavbarWithRouter;
