import React from 'react';
import { ThemeContext } from '../../../ThemeContext';

import TopBar from './TopBar/TopBar';
import TwoSizeCardGallery from '../../Galleries/TwoSizeCardGallery/TwoSizeCardGallery';
import TwoSizeCard from '../../Cards/TwoSizeCard/TwoSizeCard';

import styles from './ArtistProfileDisplay.module.scss';
import { prepareComponent } from './helpers';
import testArtists from '../../../Datasets/testArtists.js';

class ArtistProfileDisplay extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.artistProfileDisplayClasses }>
				<TopBar/>
				<TwoSizeCardGallery> 
          {
            testArtists.map((artist, index) => (
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
