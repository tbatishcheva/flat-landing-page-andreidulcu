import React, { Component } from 'react';
import Header from '../Header/Header';
import Features from '../Features/Features';
import About from '../About/About';
import LastSlide from '../LastSlide/LastSlide';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Features />
        <About />
        <LastSlide />
      </>
    );
  }
}

export default App;
