import React, { Component } from 'react';
import styles from './LastSlide.module.css';
import Footer from './Footer/Footer';
import Newsletter from './Newsletter/Newsletter';
import Container from '../Container/Container';

class LastSlide extends Component {
  render() {
    return (
      <div className={styles.lastSlide}>
        <Container>
          <div className={styles.lastSlideWrapper}>
            <div className={styles.NewsletterWrapper}> <Newsletter /></div>
            <div className={styles.FooterWrapper}><Footer /></div>
          </div>
        </Container>
      </div>
    );
  }
}

export default LastSlide;
