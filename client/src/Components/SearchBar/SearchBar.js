import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import CircleButton from '../Buttons/CircleButton/CircleButton';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';

import styles from './SearchBar.module.scss';
import { prepareComponent } from './helpers';

import { ReactComponent as MagnifyingGlassHighlighted } from './SVG/MagnifyingGlass/MagnifyingGlassHighlighted.svg';
import { ReactComponent  as MagnifyingGlassDarkTheme } from './SVG/MagnifyingGlass/MagnifyingGlassDarkTheme.svg';
import { ReactComponent as MagnifyingGlassLightTheme } from './SVG/MagnifyingGlass/MagnifyingGlassLightTheme.svg';

class SearchBar extends React.Component {

	state = {
		active: false,
		searchBarText:''
	};

	static propTypes = {
		defaultText: PropTypes.string.isRequired
	};

	static defaultProps = {
		defaultText: 'Search by artist name.'
	};

	searchInputRef = React.createRef();

	// - Temporary until ref issue is fixed.
	searchInput = document.getElementById('searchInput');
	
	handleSearchButtonClick = () => {
		const prevState = this.state;
		
		this.setState((prevState) => (
			{ active: !prevState.active }
		));


		// - Unsolved problem. Ref coming back as undefined, can't use it.
		//   React syntax seems to be ok, not sure what the issue is. 
		//console.log(this.searchInputRef);
		//this.searchInputRef.current.focus();
		
		// - Temporary until ref issue is fixed.
		// this.searchInput.focus();
		//document.getElementById('searchInput').focus();
	};

	handleSearchSubmit = (e) => {
		e.preventDefault();
	}

	render() {

		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.searchBarClasses }>			
				{
					(this.state.active) ?
						<React.Fragment>
							<form 
								className={ styles.searchField }
								onSubmit={ this.handleSearchSubmit }
							>
								<input 
									type='text'
									ref={ this.searchInputRef }
									id='searchInput' // - Temporary until ref issue fixed.
									className={ initObject.searchInputClasses }
									placeholder='Search by artist name.'
								/>
							</form>
							<OutlineButton
								text='Search'
								onClick={ this.handleSearchSubmit }
								shape='rounded'
							/>
						</React.Fragment> :
						null
				}
				<div className={ styles.searchButton }>
					<CircleButton
						size='20px'
						highlighted={ <MagnifyingGlassHighlighted/> }
						darkTheme={ <MagnifyingGlassDarkTheme/> }
						lightTheme={ <MagnifyingGlassLightTheme/> }
						onClick= { this.handleSearchButtonClick }
					/>
				</div>				
			</div>
		);
	}
}

SearchBar.contextType = ThemeContext;

export default SearchBar;
