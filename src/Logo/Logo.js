import React, {Component} from 'react';
import styles from './Logo.module.css';

class Logo extends Component {
  render() {
    return (
      <div className={styles.logo}>
        Clean Shit
      </div>
    );
  }
}

export default Logo;