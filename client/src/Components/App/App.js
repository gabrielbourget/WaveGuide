import React from 'react';
import styles from './App.module.css';
import { ThemeContext } from '../../ThemeContext';

import testArtists from '../../Datasets/testArtists';

//import * as config from '../../clientConfig';
// import OutlineButton  from '../Buttons/OutlineButton/OutlineButton';
// import FilledButton from '../Buttons/FilledButton/FilledButton';
// import SelectionIndicator from '../Icons/Indicators/SelectionIndicator/SelectionIndicator';
// import Paragraph from '../TextLayout/Paragraph/Paragraph';
// import TwoSizeCardGallery from '../Galleries/TwoSizeCardGallery/TwoSizeCardGallery';
// import TwoSizeCard from '../Cards/TwoSizeCard/TwoSizeCard';
// import ColumnWithPaddingPageCradle 
//   from '../Cradles/ColumnWithPaddingPageCradle/ColumnWithPaddingPageCradle';
// import MiddleContentCradle from '../Cradles/MiddleContentCradle/MiddleContentCradle';
import CenteringCradle from '../Cradles/CenteringCradle/CenteringCradle';
// import ToTheLeftCradle from '../Cradles/ToTheLeftCradle/ToTheLeftCradle';
// import TreeView from '../TreeView/TreeView';

import FromTheTopCradle from '../Cradles/FromTheTopCradle/FromTheTopCradle';
import Navbar from '../Navbar/Navbar';
import SideMenu from '../SideMenu/SideMenu';
import Backdrop from '../CoverBackdrop/CoverBackdrop';

import ArtistProfileDisplay from '../LargeScopeComponents/ArtistProfileDisplay/ArtistProfileDisplay';

class App extends React.Component {

  // - TODO -> Move this into Redux flow once that's set up.
  state = {
    sideMenuOpen: false,
    backdropOpen: false
  };
 
  // - TODO -> setState call should be a store dispatch when redux is set up.
  sideMenuToggle = (active) => {
    if (active) console.log('Closing menu');
    else console.log('Opening menu');
    const prevState = this.state;
    this.setState((prevState) => (
      { sideMenuOpen: !prevState.sideMenuOpen }
    ));
  };

  // - TODO -> setState call should be a store dispatch when redux is set up.
  backdropClickHandler = () => {
    this.setState({ 
      sideMenuOpen: false,
      backdropOpen: false
    });
  }
  
  render() {

    // - TODO -> setState call should be a store dispatch when redux is set up.
    let backdrop;
    if (this.state.sideMenuOpen) {
      backdrop = <Backdrop onClick={ this.backdropClickHandler }/>
    }

    return (
      <ThemeContext.Provider value='dark'>
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
            <ArtistProfileDisplay displayMode='gallery'/>
          </FromTheTopCradle>
        {/* SideMenu goes here */}
        <SideMenu open={ this.state.sideMenuOpen } />
        { backdrop }
        </div> 
      </ThemeContext.Provider>
     
    ); // return
  }; // render()
}

export default App;


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
