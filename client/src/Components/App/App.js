import React from 'react';
import styles from './App.module.css';
import { ThemeContext } from '../../ThemeContext';

import artists from '../../Datasets/artists';

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
  //           Container is scaffolded, just needs the rest of redux set up.
  // state = {
  //   artists: artists,
  //   sideMenuOpen: false,
  //   backdropOpen: false,
  //   theme: 'light'
  // };
 
  // - TODO -> setState call should be a store dispatch when redux is set up.
  //           Call props function passed down from container component, which
  //           will get reducer to manipulate state.
  toggleSideMenu = () => {
    const prevState = this.state;
    this.setState((prevState) => (
      { sideMenuOpen: !prevState.sideMenuOpen }
    ));
  };

  // - TODO -> setState call should be a store dispatch when redux is set up.
  //           Call props function passed down from container component, which
  //           will get reducer to manipulate state.
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
    // console.log('In theme switch function');
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
    // (hour < 12) ? this.props.switchTheme('dark') : this.props.switchTheme('light');
    (hour < 12) ? this.setState({ theme:'dark' }) : this.setState({ theme:'light'});

    // - Use this once redux is active. This will mock requesting initial data from server. 
    this.props.loadArtists()
  }

  render(){

    // - TODO -> setState call should be a store dispatch when Redux is set up.
    let backdrop;
    // - if (this.props.backDropOpen) once redux is set up.
    if (this.state.sideMenuOpen) {
      backdrop = <Backdrop onClick={ this.backdropClickHandler }/>
    }

    return (
      // - Draw this from mapped props once redux is set up.
      //   value={ this.props.settings.theme }
      <ThemeContext.Provider value={ this.state.theme }> 
        <div className={ styles.app }>
          <FromTheTopCradle>
            <Navbar 
              // - Active once redux is running.
              // searchThroughArtists={ this.props.searchThroughArtists }
              onSideMenuButtonClick={ this.toggleSideMenu }
              // onSideMenuButtonClick={ this.props.toggleSideMenu }
            />
            <ArtistProfileDisplay 
              displayMode='gallery'
              onSortClick={ this.sortArtists }
              // onSortAlphabeticalClick={ this.props.sortArtistsAlphabetical }
              // onSortRevAlphabeticalClick={ this.props.sortArtistsReverseAlphabetical }
              // artists={ this.props.artists }
              artists={ this.state.artists }
            />
            <Footer/>
          </FromTheTopCradle>
          {/* SideMenu goes here */}
          <SideMenu 
            // currTheme={ this.props.settings.theme }
            currTheme={ this.state.theme }
            // open={ this.props.settings.sideMenuOpen }
            open={ this.state.sideMenuOpen } 
            // onThemeSwitch={ this.props.switchTheme }
            onThemeSwitch={ this.switchTheme }
          />
          { backdrop }
        </div> 
      </ThemeContext.Provider>
     
    ); // return
  }; // render()
}

export default App;
