import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Container>
          <div className={styles.headerWrapper}>
            <div className={styles.logoWrapper}>
              <Logo />
            </div>
            <div className={styles.menuWrapper}>
              <ul className={styles.menu}>
                <li className={styles.menuItem}><a href="https://google.com">Features</a></li>
                <li className={styles.menuItem}><a href="https://google.com">About</a></li>
                <li className={styles.menuItem}><a href="https://google.com">Newsletter</a></li>
              </ul>
              <div className={styles.download}><a href="https://google.com">DOWNLOAD</a></div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.title}>Next Gen App</div>
              <div className={styles.subtitle}>
                    A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC.
                    These handy little devices allow individuals to retrieve and store e-mail messages,
                    create a contact file.
              </div>
              <a href="http://google.com" className={styles.button}>DOWNLOAD</a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
