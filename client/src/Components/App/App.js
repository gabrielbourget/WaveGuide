import React, { Component } from 'react';
import logo from '../../logo.svg';
import styles from './App.module.css';
import { ThemeContext } from '../../ThemeContext';
import * as config from '../../clientConfig';
import OutlineButton  from '../Buttons/OutlineButton/OutlineButton.js';
import ColumnWithPaddingPageCradle 
  from '../Cradles/ColumnWithPaddingPageCradle/ColumnWithPaddingPageCradle.js';
import MiddleContentCradle from '../Cradles/MiddleContentCradle/MiddleContentCradle.js';

class App extends Component {

  handleClick() {
    console.log('boop');
  }

  render() {
    return (
      <ThemeContext.Provider value={ config.CURR_THEME }>
        <div className={ styles.app }>
          <ColumnWithPaddingPageCradle>
            <MiddleContentCradle>
              <OutlineButton
                buttonText="SEND"
                onClick={ this.handleClick }
              />
            </MiddleContentCradle>
          </ColumnWithPaddingPageCradle>
        </div> 
      </ThemeContext.Provider>
     
    ); // return
  }; // render()
}

export default App;
