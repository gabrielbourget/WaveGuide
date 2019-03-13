import React from 'react';
import ClassNames from 'classnames';
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ArtistGallery.module.scss';

import TwoSizeCardGallery from '../TwoSizeCardGallery/TwoSizeCardGallery';
import TwoSizeCard from '../../Cards/TwoSizeCard/TwoSizeCard';

class ArtistGallery extends React.Component {

  renderPath = () => {

    const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
    const noResultsClasses = ClassNames(styles.noResults, themeClass);

    if (this.props.artists.length === 0) {
      return (
        <div className={ noResultsClasses }>
          <h4>Search for an artist up top in the navigation bar.</h4>
          <br/>
          <h4>
            Enter 'everyone' as the search term to return all <br/>
            artists contained in the community directory.
          </h4>
        </div>
      )
    }
    else return (
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

	render() {

    return (
      <div className={ styles.artistGallery }>
        { this.renderPath() }
      </div>
    );

	}
}

ArtistGallery.contextType = ThemeContext;

export default ArtistGallery;
