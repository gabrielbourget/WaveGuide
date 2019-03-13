import React from 'react';
// import ClassNames from 'classnames';
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

// import styles from './ArtistGallery.module.scss';

import TwoSizeCardGallery from '../TwoSizeCardGallery/TwoSizeCardGallery';
import TwoSizeCard from '../../Cards/TwoSizeCard/TwoSizeCard';

class ArtistGallery extends React.Component {
	render() {
		return (
			<TwoSizeCardGallery> 
        {
          this.props.artists.map((artist, index) => (
            <TwoSizeCard
              key={ index }
              shape='round'
              name={ artist.name }
              imagePath={ artist.imageURL }
              socialURLs={ artist.socialURLs }
            />
          ))
        }					
			</TwoSizeCardGallery>
		);
	}
}

ArtistGallery.contextType = ThemeContext;

export default ArtistGallery;
