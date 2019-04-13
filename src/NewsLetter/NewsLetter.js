import React, {Component} from 'react';
import Container from "../Container/Container";
import styles from './NewsLetter.module.css';

class NewsLetter extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.content}>
            <div className={styles.title}>Sign Up for the Newsletter</div>
            <div className={styles.subtitle}>Go ahead and sign up for the best fuckin
              newsletter</div>
            <form className={styles.form}>
              <input type={'text'} placeholder={'Name'}/>
              <input type={'email'} placeholder={'Email'}/>
              <input className={styles.button} type={'submit'} value={'SIGN UP'}/>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default NewsLetter;