import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OutlineButton  from './Components/Buttons/OutlineButton/OutlineButton.js';
import ColumnWithPaddingPageCradle 
  from './Components/Cradles/ColumnWithPaddingPageCradle/ColumnWithPaddingPageCradle.js';
import MiddleContentCradle from './Components/Cradles/MiddleContentCradle/MiddleContentCradle.js';

class App extends Component {

  handleClick() {
    alert('sup');
    console.log('boop');
  }

  render() {
    return (
      <ColumnWithPaddingPageCradle>
        <MiddleContentCradle>
          <OutlineButton
            buttonText="SEND"
            onClick={ this.handleClick }
          />
        </MiddleContentCradle>
      </ColumnWithPaddingPageCradle>
    ); // return
  }; // render()
}

export default App;
