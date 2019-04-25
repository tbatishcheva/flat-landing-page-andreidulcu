import React, { Component } from 'react';
import styles from './Newsletter.module.css';

class Newsletter extends Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.title}>Sign Up for the Newsletter</div>
        <div className={styles.subtitle}>
Go ahead and sign up for the best fuckin
              newsletter
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input className={styles.button} type="submit" value="SIGN UP" />
        </form>
      </div>
    );
  }
}

export default Newsletter;
