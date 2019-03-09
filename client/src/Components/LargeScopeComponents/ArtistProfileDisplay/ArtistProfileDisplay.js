import React from 'react';
import { ThemeContext } from '../../../ThemeContext';

import TopBar from './TopBar/TopBar';
import TwoSizeCardGallery from '../../Galleries/TwoSizeCardGallery/TwoSizeCardGallery';
import TwoSizeCard from '../../Cards/TwoSizeCard/TwoSizeCard';
import ArtistTable from '../../Tables/ArtistTable/ArtistTable';

import styles from './ArtistProfileDisplay.module.scss';
import { prepareComponent } from './helpers';
import testArtists from '../../../Datasets/testArtists';
import { sortCriteriaEnum } from '../../../Helpers/generalDataStructures'

class ArtistProfileDisplay extends React.Component {
		
	state = {
		displayMode: this.props.displayMode,
		artists: testArtists // - Eventually bring this in from mapped props when Redux is hooked up. 
	};

	// - Move this logic into a reducer once Redux is hooked up. 
	sortArtists = (direction) => {
		switch (direction) {
			case sortCriteriaEnum.ALPHABETICAL: {
				// - Action will be dispatched here when redux is hooked up.
				const newArtists = this.state.artists.slice().sort((a,b) => a.title > b.title ? 1 : -1);
				this.setState({ 
					artists: newArtists
				});
				break;
			}
			case sortCriteriaEnum.REVERSE_ALPHABETICAL: {
				// - Action will be dispatched here when redux is hooked up.
				const newArtists = this.state.artists.slice().sort((a,b) => a.title > b.title ? -1 : 1);
				this.setState({ 
					artists: newArtists
				});
				break;
			}
			default: break;
		}		
	};

	switchViewMode = (displayMode) => {
		this.setState({displayMode});
	}

	resolveDisplayMode = () => {
		if (this.state.displayMode === 'gallery') {
			return (
				<TwoSizeCardGallery> 
          {
            this.state.artists.map((artist, index) => (
              <TwoSizeCard
                key={ index }
                shape='round'
                title={ artist.title }
                imagePath={ artist.imagePath }
                socialURLs={ artist.socialURLs }
              />
            ))
          }					
				</TwoSizeCardGallery>
			);
		}
		else if (this.state.displayMode === 'list') {
			return (
				<ArtistTable
					// - This itself will eventually be props mapped in from the connect redux function. 
					artists={ this.state.artists }
				/>
			);
		}
	};

	render() {
		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.artistProfileDisplayClasses }>
				<TopBar 
					onSortClick={ this.sortArtists }
					onSwitchViewModeClick={ this.switchViewMode }
				/>
				{/* Method below renders out gallery or list, based on mapped state props */}
				{ this.resolveDisplayMode() }

			</div>
		);
	}
}

ArtistProfileDisplay.contextType = ThemeContext;

export default ArtistProfileDisplay;
