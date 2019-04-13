import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Container>
          <div className={styles.content}>
            <div>
              <div className={styles.logo}>Clean Shit</div>
              <div className={styles.designer}>designed by Andrei Dulcu</div>
            </div>
            <ul className={styles.menu}>
              <li><a href="#">Features</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#" className={styles.bottom}>DOWNLOAD</a></li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
