import React, { Component } from 'react';
import Header from '../Header/Header';
import Features from '../Features/Features';
import About from '../About/About';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <About />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default App;
