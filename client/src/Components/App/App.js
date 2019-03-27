import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import NavbarWithRouter from '../Navbar/Navbar';
import HomePage from '../LargeScopeComponents/HomePage/HomePage';
import ArtistProfileDisplay from '../LargeScopeComponents/ArtistProfileDisplay/ArtistProfileDisplay';
import DocumentationDisplayWithRouter from '../LargeScopeComponents/DocumentationDisplay/DocumentationDisplay';
import SideMenu from '../SideMenu/SideMenu';
import Footer from '../Footer/Footer';
import NotFoundPageComponent from '../NotFoundPageComponent/NotFoundPageComponent'; 

import styles from './App.module.css';

class App extends React.Component {

  // - Dispatch initial API call to the Neo4J database here
  componentWillMount() {

    const clientDateTime = new Date();
    const hour = clientDateTime.getHours();
    ( hour > 7 && hour < 21 ) ? this.props.switchTheme('light') : this.props.switchTheme('dark');

    // - Right now this is a call to a local javascript object. Eventually, that 
    //   dispatch function will make an asynchronous request to a remote Neo4J database. 
    this.props.loadArtists();
  };

  render(){

    return (
      <ThemeContext.Provider value={ this.props.settings.theme }> 
        <div className={ styles.app }>
          <NavbarWithRouter 
            searchThroughArtists={ this.props.searchThroughArtists }
            sideMenuOpen={ this.props.settings.sideMenuOpen }
            onSideMenuButtonClick={ this.props.toggleSideMenu }
          /> 
          <Switch>
            <Route path='/' exact component={ HomePage }/>
            <Route
              path='/artists'
              render={ () => (
                <ArtistProfileDisplay 
                  displayMode='gallery'
                  onSortClick={ this.sortArtists }
                  onSortAlphabeticalClick={ this.props.sortArtistsAlphabetical }
                  onSortRevAlphabeticalClick={ this.props.sortArtistsReverseAlphabetical }
                  artists={ this.props.displayedArtists }
                />               
              )}
            /> 
            <Route 
              path='/documentation' 
              //component={ DocumentationDisplayWithRouter }
              render={ () => (
                <DocumentationDisplayWithRouter
                  onThemeSwitch={ this.props.switchTheme }
                />
              )}
            />

            {/* Catch all route for 404 errors */}
            <Route render={ ({ location }) =>  <NotFoundPageComponent/> }/>
          </Switch>
          <Footer/>
          <SideMenu 
            currTheme={ this.props.settings.theme }
            open={ this.props.settings.sideMenuOpen }
            onThemeSwitch={ this.props.switchTheme }
            onSideMenuButtonClick={ this.props.toggleSideMenu }
          />
        </div>    
      </ThemeContext.Provider>    
    ); // - return
  }; // - render()
}

export default App;
