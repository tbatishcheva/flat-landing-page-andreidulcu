import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Container>
          <div className={styles.content}>
            <div>
              <Logo />
            </div>
            <div>
              <Menu />
              <div className={styles.contentWrapper}>
                <div>
                  <div className={styles.title}>Next Gen App</div>
                  <div className={styles.subtitle}>
                    A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC.
                    These handy little devices allow individuals to retrieve and store e-mail messages,
                    create a contact file.
                  </div>
                  <a href="#" className={styles.button}>DOWNLOAD</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
