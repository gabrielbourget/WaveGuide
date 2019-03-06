import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import CircleButton from '../Buttons/CircleButton/CircleButton';

import styles from './SearchBar.module.scss';
import { prepareComponent } from './helpers';

import { ReactComponent as MagnifyingGlassHighlighted } from './SVG/MagnifyingGlass/MagnifyingGlassHighlighted.svg';
import { ReactComponent  as MagnifyingGlassDarkTheme } from './SVG/MagnifyingGlass/MagnifyingGlassDarkTheme.svg';
import { ReactComponent as MagnifyingGlassLightTheme } from './SVG/MagnifyingGlass/MagnifyingGlassLightTheme.svg';

class SearchBar extends React.Component {

	state = {
		active: false
	};

	static propTypes = {
		defaultText: PropTypes.string.isRequired
	};

	render() {

		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return(
			<div className={ initObject.searchBarClasses }>
				<form className={ styles.searchField }>
					<input 
						type="text" 
						className={ initObject.searchInputClasses }
						placeholder='Search by artist name.'
					/>
					<div className={ styles.searchButton }>
						<CircleButton
							size='40px'
							highlighted={ <MagnifyingGlassHighlighted/> }
							darkTheme={ <MagnifyingGlassDarkTheme/> }
							lightTheme={ <MagnifyingGlassLightTheme/> }
							onClick= { () => {
								// - Pass state in through function param.
								//   setState() is not synchronous,
								//   cannot rely on state read to be precise,
								//   pass in copy instead. 
								const prevState = this.state;
								this.setState((prevState) => (
									{ active: !prevState.active }
								))
							}}
						/>
					</div>
				</form>
			</div>
		);
	}
}

SearchBar.contextType = ThemeContext;

export default SearchBar;
