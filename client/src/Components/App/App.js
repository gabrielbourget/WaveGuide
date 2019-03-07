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
// import CenteringCradle from '../Cradles/CenteringCradle/CenteringCradle';
// import ToTheLeftCradle from '../Cradles/ToTheLeftCradle/ToTheLeftCradle';
// import TreeView from '../TreeView/TreeView';

import FromTheTopCradle from '../Cradles/FromTheTopCradle/FromTheTopCradle';
import Navbar from '../Navbar/Navbar';

class App extends React.Component {

  sideMenuToggle = (active) => {
    if (active) console.log('Closing menu');
    else console.log('Opening menu');
  };

  handleClick() {
    console.log('boop');
  }

  // config.CURR_THEME <-- read this into initial state that goes into redux store cretion eventually
  render() {
    return (
      <ThemeContext.Provider value='light'>
        <div className={ styles.app }>
{/*          <ToTheLeftCradle>
            <TreeView/>
          </ToTheLeftCradle>*/}
{/*          <ColumnWithPaddingPageCradle>
            <MiddleContentCradle>

            </MiddleContentCradle>
          </ColumnWithPaddingPageCradle> */}
{/*          <TwoSizeCardGallery>
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
            <TwoSizeCard
              shape='round'
              title={ testArtists[0].title }
              imagePath={ testArtists[0].imagePath }
              socialURLs={ testArtists[0].socialURLs }
            /> 
          </TwoSizeCardGallery>*/}
{/*          <CenteringCradle>
              
          </CenteringCradle>*/}

          <FromTheTopCradle>
            <Navbar onSideMenuButtonClick={ this.sideMenuToggle }/>
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
          </FromTheTopCradle>

        </div> 
      </ThemeContext.Provider>
     
    ); // return
  }; // render()
}

export default App;


const testArtists = [
  {
    title: 'Cashforgold',
    imagePath: process.env.PUBLIC_URL + '/Images/Cashforgold.jpg',
    socialURLs: {
      soundCloud: 'https://soundcloud.com/hoodiegen',
      instagram: 'https://instagram.com/hoodiegen',
      twitter: 'https://twitter.com/hoodiegen',
      spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
      personalWebsite: 'https://hoodiegen.com',
      //bandCamp: 'https://hoodie1.bandcamp.com/releases'
      // appleMusic: 'https://itunes.apple.com/us/artist/hoodie/1286330076'  
    }  
  },
  {
    title: 'Arael',
    imagePath: process.env.PUBLIC_URL + '/Images/Arael.png',
    socialURLs: {
      soundCloud: 'https://soundcloud.com/hoodiegen',
      instagram: 'https://instagram.com/hoodiegen',
      twitter: 'https://twitter.com/hoodiegen',
      spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
      personalWebsite: 'https://hoodiegen.com',
      //bandCamp: 'https://hoodie1.bandcamp.com/releases'
      // appleMusic: 'https://itunes.apple.com/us/artist/hoodie/1286330076'     
    }
  },
  {
    title: 'Barnacle Boi',
    imagePath: process.env.PUBLIC_URL + '/Images/BarnacleBoi.jpg',
    socialURLs: {
      soundCloud: 'https://soundcloud.com/hoodiegen',
      instagram: 'https://instagram.com/hoodiegen',
      twitter: 'https://twitter.com/hoodiegen',
      spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
      personalWebsite: 'https://hoodiegen.com',
      //bandCamp: 'https://hoodie1.bandcamp.com/releases'
      // appleMusic: 'https://itunes.apple.com/us/artist/hoodie/1286330076'     
    }   
  },
  {
    title: 'Kavern',
    imagePath: process.env.PUBLIC_URL + '/Images/Kavern.jpg',
    socialURLs: {
      soundCloud: 'https://soundcloud.com/hoodiegen',
      instagram: 'https://instagram.com/hoodiegen',
      twitter: 'https://twitter.com/hoodiegen',
      spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
      personalWebsite: 'https://hoodiegen.com',
      //bandCamp: 'https://hoodie1.bandcamp.com/releases'
      // appleMusic: 'https://itunes.apple.com/us/artist/hoodie/1286330076'     
    }    
  },
  {
    title: 'Kyddiekafka',
    imagePath: process.env.PUBLIC_URL + '/Images/Kyddiekafka.jpg',
    socialURLs: {
      soundCloud: 'https://soundcloud.com/hoodiegen',
      instagram: 'https://instagram.com/hoodiegen',
      twitter: 'https://twitter.com/hoodiegen',
      spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
      personalWebsite: 'https://hoodiegen.com',
      //bandCamp: 'https://hoodie1.bandcamp.com/releases'
      // appleMusic: 'https://itunes.apple.com/us/artist/hoodie/1286330076'     
    }    
  },
  {
    title: 'Fyoomz',
    imagePath: process.env.PUBLIC_URL + '/Images/Fyoomz.jpg',
    socialURLs: {
      soundCloud: 'https://soundcloud.com/hoodiegen',
      instagram: 'https://instagram.com/hoodiegen',
      twitter: 'https://twitter.com/hoodiegen',
      spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
      personalWebsite: 'https://hoodiegen.com',
      //bandCamp: 'https://hoodie1.bandcamp.com/releases'
      // appleMusic: 'https://itunes.apple.com/us/artist/hoodie/1286330076'     
    }     
  },
  {
    title: 'Sidewalks and Skeletons',
    imagePath: process.env.PUBLIC_URL + '/Images/SidewalksAndSkeletons.png',
    socialURLs: {
      soundCloud: 'https://soundcloud.com/hoodiegen',
      instagram: 'https://instagram.com/hoodiegen',
      twitter: 'https://twitter.com/hoodiegen',
      spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
      personalWebsite: 'https://hoodiegen.com',
      //bandCamp: 'https://hoodie1.bandcamp.com/releases'
      // appleMusic: 'https://itunes.apple.com/us/artist/hoodie/1286330076'     
    }     
  }  
];

// const testArtist = {
//   title: 'Cashforgold',
//   imagePath: process.env.PUBLIC_URL + '/Images/Cashforgold.jpg',
//   socialURLs: {
//     soundCloud: 'https://soundcloud.com/hoodiegen',
//     instagram: 'https://instagram.com/hoodiegen',
//     twitter: 'https://twitter.com/hoodiegen',
//     spotify: 'https://open.spotify.com/artist/08kgcpEQscDxkhVLXRkGXK?si=RTo4wyZ8Q_uds2jyJbIvCA',
//     personalWebsite: 'https://hoodiegen.com',
//     //bandCamp: 'https://hoodie1.bandcamp.com/releases'
//     // appleMusic: 'https://itunes.apple.com/us/artist/hoodie/1286330076'
//   }
// };
