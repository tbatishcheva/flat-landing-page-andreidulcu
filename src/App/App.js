import React, { Component } from 'react';
import Header from '../Header/Header';
import Features from '../Features/Features';
import About from '../About/About';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Features />
        <About />
        <Newsletter />
        <Footer />
      </>
    );
  }
}

export default App;
