import React from 'react';
import styles from './App.module.css';
import { ThemeContext } from '../../ThemeContext';

// import artists from '../../Datasets/artists';

// import ColumnWithPaddingPageCradle 
//   from '../Cradles/ColumnWithPaddingPageCradle/ColumnWithPaddingPageCradle';
// import MiddleContentCradle from '../Cradles/MiddleContentCradle/MiddleContentCradle';
// import CenteringCradle from '../Cradles/CenteringCradle/CenteringCradle';
// import ToTheLeftCradle from '../Cradles/ToTheLeftCradle/ToTheLeftCradle';
// import TreeView from '../TreeView/TreeView';

import FromTheTopCradle from '../Cradles/FromTheTopCradle/FromTheTopCradle';
import Navbar from '../Navbar/Navbar';
import SideMenu from '../SideMenu/SideMenu';
import Backdrop from '../CoverBackdrop/CoverBackdrop';
import ArtistProfileDisplay from '../LargeScopeComponents/ArtistProfileDisplay/ArtistProfileDisplay';
import Footer from '../Footer/Footer';

import { sortCriteriaEnum } from '../../Helpers/generalDataStructures'

class App extends React.Component {

  // - TODO -> setState call should be a store dispatch when redux is set up.
  //           Call props function passed down from container component, which
  //           will get reducer to manipulate state.
  backdropClickHandler = () => {
    this.setState({ 
      sideMenuOpen: false,
      backdropOpen: false
    });
  };

  // - Dispatch initial API call to the Neo4J database here
  componentWillMount() {

    // - Probably dispatch this out as an action eventually once Redux is hooked up.
    const clientDateTime = new Date();
    const hour = clientDateTime.getHours();
    // - OLD -> (hour < 12) ? this.setState({ theme:'dark' }) : this.setState({ theme:'light'});
    (hour < 12) ? this.props.switchTheme('dark') : this.props.switchTheme('light');
    
    // - Use this once redux is active. This will mock requesting initial data from server. 
    this.props.loadArtists();
  };

  render(){

    let backdrop;
    //console.log('backdrop props');
    //console.log(this.props.settings.backdropOpen);
    //if (this.props.settings.backdropOpen){ //once redux is set up.
    // - OLD -> if (this.state.sideMenuOpen) {
      //backdrop = <Backdrop onClick={ this.props.toggleBackdrop }/>
    //}

    return (
      // - Draw this from mapped props once redux is set up.
      // OLD -> value={ this.state.theme }
      <ThemeContext.Provider value={ this.props.settings.theme }> 
        <div className={ styles.app }>
          <FromTheTopCradle>
            <Navbar 
              // - Active once redux is running.
              searchThroughArtists={ this.props.searchThroughArtists }
              sideMenuOpen={ this.props.settings.sideMenuOpen }
              // OLD -> onSideMenuButtonClick={ this.toggleSideMenu }
              onSideMenuButtonClick={ this.props.toggleSideMenu }
            />
{/*            <ArtistProfileDisplay 
              displayMode='gallery'
              onSortClick={ this.sortArtists }
              // - Active once redux is running.
              onSortAlphabeticalClick={ this.props.sortArtistsAlphabetical }
              onSortRevAlphabeticalClick={ this.props.sortArtistsReverseAlphabetical }
              
              // - OLD -> artists={ this.state.artists }
              // artists={ this.props.artists }
              artists={ this.props.displayedArtists }
            />*/}
            hello
            
          </FromTheTopCradle>
          <Footer/>
          {/* SideMenu goes here */}
          <SideMenu 
            // - OLD -> currTheme={ this.state.theme }
            currTheme={ this.props.settings.theme }
            // - OLD -> open={ this.state.sideMenuOpen } 
            open={ this.props.settings.sideMenuOpen }
            // OLD -> onThemeSwitch={ this.switchTheme }
            onThemeSwitch={ this.props.switchTheme }
          />
          { backdrop }
        </div> 
      </ThemeContext.Provider>
     
    ); // return
  }; // render()
}

export default App;
