import React, { Component } from 'react';
import logo from '../../logo.svg';
import styles from './App.module.css';
import { ThemeContext } from '../../ThemeContext';
import * as config from '../../clientConfig';
import OutlineButton  from '../Buttons/OutlineButton/OutlineButton';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import ColumnWithPaddingPageCradle 
  from '../Cradles/ColumnWithPaddingPageCradle/ColumnWithPaddingPageCradle';
import MiddleContentCradle from '../Cradles/MiddleContentCradle/MiddleContentCradle';
import SelectionIndicator from '../Icons/Indicators/SelectionIndicator/SelectionIndicator';

class App extends Component {

  handleClick() {
    console.log('boop');
  }
  // config.CURR_THEME 
  render() {
    return (
      <ThemeContext.Provider value='dark'>
        <div className={ styles.app }>
          <ColumnWithPaddingPageCradle>
            <MiddleContentCradle>
              <FilledButton 
                onClick={ this.handleClick } 
                text='SUBMIT INFORMATION' 
                shape='rounded'/>
              <OutlineButton 
                onClick={ this.handleClick } 
                text='SUBMIT INFORMATION' 
                shape=''/>                
            </MiddleContentCradle>
          </ColumnWithPaddingPageCradle> 
        </div> 
      </ThemeContext.Provider>
     
    ); // return
  }; // render()
}

export default App;
