import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Container>
          <div className={styles.wrapper}>
            <div>
              <div className={styles.logo}>Clean Shit</div>
              <div className={styles.designer}>designed by Andrei Dulcu</div>
            </div>
            <div className={styles.menuWrapper}>
              <div className={styles.download}>
                <a href="https://google.com">Download</a>
              </div>
              <ul className={styles.menu}>
                <li><a href="https://google.com">Features</a></li>
                <li><a href="https://google.com">About</a></li>
                <li><a href="https://google.com">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
