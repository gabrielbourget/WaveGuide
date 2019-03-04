import React from 'react';
import styles from './App.module.css';
import { ThemeContext } from '../../ThemeContext';
//import * as config from '../../clientConfig';
// import OutlineButton  from '../Buttons/OutlineButton/OutlineButton';
// import FilledButton from '../Buttons/FilledButton/FilledButton';
// import SelectionIndicator from '../Icons/Indicators/SelectionIndicator/SelectionIndicator';
// import Paragraph from '../TextLayout/Paragraph/Paragraph';
import TwoSizeCardGallery from '../Galleries/TwoSizeCardGallery/TwoSizeCardGallery';
import TwoSizeCard from '../Cards/TwoSizeCard/TwoSizeCard';
// import ColumnWithPaddingPageCradle 
//   from '../Cradles/ColumnWithPaddingPageCradle/ColumnWithPaddingPageCradle';
// import MiddleContentCradle from '../Cradles/MiddleContentCradle/MiddleContentCradle';

const testArtist = {
  title: 'Hoodie',
  imagePath: process.env.PUBLIC_URL + '/Images/Hoodie.jpg',
  socialURLs: {
    soundCloud: 'https://soundcloud.com/hoodiegen',
    instagram: 'https://instagram.com/hoodiegen',
    twitter: 'https://twitter.com/hoodiegen',
    spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
    personalWebsite: 'https://hoodiegen.com'
  }
};

class App extends React.Component {

  handleClick() {
    console.log('boop');
  }

  // config.CURR_THEME <-- read this into initial state that goes into redux store cretion eventually
  render() {
    return (
      <ThemeContext.Provider value='dark'>
        <div className={ styles.app }>
{/*          <ColumnWithPaddingPageCradle>
            <MiddleContentCradle>

            </MiddleContentCradle>
          </ColumnWithPaddingPageCradle> */}
          <TwoSizeCardGallery>
            <TwoSizeCard
              shape='round'
              title={ testArtist.title }
              imagePath={ testArtist.imagePath }
              socialURLs={ testArtist.socialURLs }
            /> 
          </TwoSizeCardGallery>
        </div> 
      </ThemeContext.Provider>
     
    ); // return
  }; // render()
}

export default App;
