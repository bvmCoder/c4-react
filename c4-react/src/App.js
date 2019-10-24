import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import Logo from './Components/Logo';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-container">
          <div className="app-container">
            <Logo text={'263 X 78'} />
            <Slider />
          </div>
        </div>

        <Footer pText={'Copyright 2019. All rights reserved.'}></Footer>
      </Fragment>
    );
  }
}

export default App;
