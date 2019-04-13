import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './About.module.css';
import video from './video.png';
import blackRect from './black-rectangle.svg';
import whiteRect from './white-rectangle.svg';
import blackRectHollow from './black-rectangle-hollow.svg';

class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <Container>
          <div className={styles.content}>
            <div className={styles.title}>
            Explore it
            </div>
            <div className={`${styles.blackRect} ${styles.icons}`}><img src={blackRect} alt="blackRect" /></div>
            <div className={`${styles.whiteRectLeft} ${styles.icons}`}><img src={whiteRect} alt="whiteRect" /></div>
            <div className={styles.img}>
              <img src={video} alt="video" />
            </div>
            <div className={`${styles.blackRectHollow} ${styles.icons}`}><img src={blackRectHollow} alt="blackRectHollow" /></div>
            <div className={`${styles.whiteRectRight} ${styles.icons}`}><img src={whiteRect} alt="whiteRect" /></div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
