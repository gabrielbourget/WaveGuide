import React from 'react';
import { ThemeContext } from '../../../ThemeContext';

import TopBar from './TopBar/TopBar';
import TwoSizeCardGallery from '../../Galleries/TwoSizeCardGallery/TwoSizeCardGallery';
import TwoSizeCard from '../../Cards/TwoSizeCard/TwoSizeCard';

import styles from './ArtistProfileDisplay.module.scss';
import { prepareComponent } from './helpers';
import testArtists from '../../../Datasets/testArtists';
import { sortCriteriaEnum } from '../../../Helpers/generalDataStructures'

class ArtistProfileDisplay extends React.Component {
		
	state = {
		artists: testArtists
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
	}

	render() {
		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.artistProfileDisplayClasses }>
				<TopBar onClick={ this.sortArtists }/>
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
			</div>
		);
	}
}

ArtistProfileDisplay.contextType = ThemeContext;

export default ArtistProfileDisplay;
