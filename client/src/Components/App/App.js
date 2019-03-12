import React from 'react';
import styles from './App.module.css';
import { ThemeContext } from '../../ThemeContext';

import artists from '../../Datasets/artists';

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
import Footer from '../Footer/Footer';

import { sortCriteriaEnum, themeEnum } from '../../Helpers/generalDataStructures'

class App extends React.Component {

  // - TODO -> Move this into Redux flow once that's set up.
  state = {
    artists: artists,
    sideMenuOpen: false,
    backdropOpen: false,
    theme: 'light'
  };
 
  // - TODO -> setState call should be a store dispatch when redux is set up.
  sideMenuToggle = (active) => {
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
  };

  // - Move this logic into a reducer once Redux is hooked up. 
  sortArtists = (direction) => {
    switch (direction) {
      case sortCriteriaEnum.ALPHABETICAL: {
        // - Action will be dispatched here when redux is hooked up.
        const newArtists = this.state.artists.slice().sort((a,b) => a.name > b.name ? 1 : -1);
        this.setState({ 
          artists: newArtists
        });
        break;
      }
      case sortCriteriaEnum.REVERSE_ALPHABETICAL: {
        // - Action will be dispatched here when redux is hooked up.
        const newArtists = this.state.artists.slice().sort((a,b) => a.name > b.name ? -1 : 1);
        this.setState({ 
          artists: newArtists
        });
        break;
      }
      default: break;
    }   
  };

  // - Move this logic into a reducer once Redux is hooked up.
  switchTheme = (theme) => {
    console.log('In theme switch function');
    switch (theme) {
      case 'dark': {
        this.setState({ theme: 'dark' });
        break;
      }
      case 'light': {
        this.setState({ theme: 'light' });
        break;
      }
      default: break;
    }
  };
  
  // - Dispatch initial API call to the Neo4J database here
  componentWillMount() {

    // - Probably dispatch this out as an action eventually once Redux is hooked up.
    const clientDateTime = new Date();
    const hour = clientDateTime.getHours();
    (hour < 12) ? this.setState({ theme:'dark' }) : this.setState({ theme:'light'});
  }

  render(){

    // - TODO -> setState call should be a store dispatch when Redux is set up.
    let backdrop;
    if (this.state.sideMenuOpen) {
      backdrop = <Backdrop onClick={ this.backdropClickHandler }/>
    }

    return (
      // - Draw this from mapped props once redux is set up.
      <ThemeContext.Provider value={ this.state.theme }> 
        <div className={ styles.app }>
  {/*          <ToTheLeftCradle>
              <TreeView/>
            </ToTheLeftCradle>*/}
  {/*          <ColumnWithPaddingPageCradle>
              <MiddleContentCradle>

              </MiddleContentCradle>
            </ColumnWithPaddingPageCradle> */}
  {/*          <CenteringCradle>

            </CenteringCradle>*/}

            <FromTheTopCradle>
              <Navbar onSideMenuButtonClick={ this.sideMenuToggle }/>
              <ArtistProfileDisplay 
                displayMode='gallery'
                onSortClick={ this.sortArtists }
                artists={ this.state.artists }
              />
              <Footer/>
            </FromTheTopCradle>
          {/* SideMenu goes here */}
          <SideMenu 
            currTheme={ this.state.theme }
            open={ this.state.sideMenuOpen } 
            onThemeSwitch={ this.switchTheme }
          />
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
