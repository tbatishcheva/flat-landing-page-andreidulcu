import React, {Component} from 'react';
import styles from './Menu.module.css';

class Menu extends Component {
  render() {
    return (
      <ul className={styles.menu}>
        <li><a href={'#'}>Features</a></li>
        <li><a href={'#'}>About</a></li>
        <li><a href={'#'}>Newsletter</a></li>
        <li><a href={'#'} className={styles.bottom}>DOWNLOAD</a></li>
      </ul>
    );
  }
}

export default Menu;