import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeContext } from '../../ThemeContext';

import CircleButton from '../Buttons/CircleButton/CircleButton';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';

import styles from './SearchBar.module.scss';
import { prepareComponent } from './helpers';

import MagnifyingGlassHighlighted from './SVG/MagnifyingGlass/MagnifyingGlassHighlighted';
import MagnifyingGlassDarkTheme from './SVG/MagnifyingGlass/MagnifyingGlassDarkTheme';
import MagnifyingGlassLightTheme from './SVG/MagnifyingGlass/MagnifyingGlassLightTheme';

class SearchBar extends React.Component {

	state = {
		active: false,
		searchQueryText:''
	};

	static propTypes = {
		defaultText: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	static defaultProps = {
		defaultText: "Search by artist name. Search 'everyone' to return all artists."
	};

	searchInputRef = React.createRef();

	// - Temporary until ref issue is fixed.
	// searchInput = document.getElementById('searchInput');
	
	handleSearchButtonClick = () => {
		const prevState = this.state;
		this.setState((prevState) => (
			{ active: !prevState.active }
		));

		// - Unsolved problem. Ref coming back as undefined, can't use it.
		//   React syntax seems to be ok, not sure what the issue is. 
		// console.log(this.searchInputRef);
		// this.searchInputRef.current.focus();
		
		// - Temporary until ref issue is fixed.
		// this.searchInput.focus();
		//document.getElementById('searchInput').focus();		

	};

	handleSearchSubmit = (e) => {

		if (this.state.searchQueryText === '') return;

		// - Active once redux is set up. 
		this.props.searchThroughArtists(this.state.searchQueryText);
		this.props.history.push('/artists');
	};

	handleSearchFormSubmit = (e) => {

		e.preventDefault();
		if (this.state.searchQueryText === '') return;
		// - Active once redux is set up. 
		this.props.searchThroughArtists(this.state.searchQueryText);	
		this.props.history.push('/artists');
	};

	render() {

		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.searchBarClasses }>
				{
					(this.state.active) ?
						<React.Fragment>
							<form 
								className={ styles.searchField }
								onSubmit={ this.handleSearchFormSubmit }
							>
								<input 
									type='text'
									ref={ this.searchInputRef }
									id='searchInput' // - Temporary until ref issue fixed.
									value={ this.state.searchQueryText }
									onChange={ (e) => this.setState({ searchQueryText: e.target.value }) }
									className={ initObject.searchInputClasses }
									placeholder={ this.props.defaultText }
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

const SearchBarWithRouter = withRouter(SearchBar);

export default SearchBarWithRouter;
