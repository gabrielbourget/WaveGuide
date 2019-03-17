import React from 'react';
import styles from './App.module.css';
import { ThemeContext } from '../../ThemeContext';

// import ColumnWithPaddingPageCradle 
//   from '../Cradles/ColumnWithPaddingPageCradle/ColumnWithPaddingPageCradle';
// import MiddleContentCradle from '../Cradles/MiddleContentCradle/MiddleContentCradle';
// import CenteringCradle from '../Cradles/CenteringCradle/CenteringCradle';
// import ToTheLeftCradle from '../Cradles/ToTheLeftCradle/ToTheLeftCradle';
import TreeView from '../TreeView/TreeView';

import FromTheTopCradle from '../Cradles/FromTheTopCradle/FromTheTopCradle';
import Navbar from '../Navbar/Navbar';
import SideMenu from '../SideMenu/SideMenu';
import Backdrop from '../CoverBackdrop/CoverBackdrop';
import Footer from '../Footer/Footer';

import HomePage from '../LargeScopeComponents/HomePage/HomePage';
import ArtistProfileDisplay from '../LargeScopeComponents/ArtistProfileDisplay/ArtistProfileDisplay';


class App extends React.Component {

  // - Dispatch initial API call to the Neo4J database here
  componentWillMount() {

    const clientDateTime = new Date();
    const hour = clientDateTime.getHours();
    (hour < 12) ? this.props.switchTheme('dark') : this.props.switchTheme('light');

    // - Right now this is a call to a local javascript object. Eventually, that 
    //   dispatch function will make an asynchronous request to a remote Neo4J database. 
    this.props.loadArtists();
  };

  render(){
    return (
      <ThemeContext.Provider value={ this.props.settings.theme }> 
        <div className={ styles.app }>
          <Navbar 
            searchThroughArtists={ this.props.searchThroughArtists }
            sideMenuOpen={ this.props.settings.sideMenuOpen }
            onSideMenuButtonClick={ this.props.toggleSideMenu }
          /> 
          {/* TODO -> HOMEPAGE ROUTE/COMPONENT GOES HERE */}
          {/*<HomePage/>*/}
          {/* TODO -> RENDER INTO A ROUTE EVENTUALLY */}
          <ArtistProfileDisplay 
            displayMode='gallery'
            onSortClick={ this.sortArtists }
            onSortAlphabeticalClick={ this.props.sortArtistsAlphabetical }
            onSortRevAlphabeticalClick={ this.props.sortArtistsReverseAlphabetical }
            artists={ this.props.displayedArtists }
          />  
          {/* TODO -> DOCUMENTATION ROUTE/COMPONENT GOES HERE */}
          {/* <Documentation/> */}
          <Footer/>
          <SideMenu 
            currTheme={ this.props.settings.theme }
            open={ this.props.settings.sideMenuOpen }
            onThemeSwitch={ this.props.switchTheme }
          />
        </div> 
      </ThemeContext.Provider>    
    ); // - return
  }; // - render()
}

export default App;
