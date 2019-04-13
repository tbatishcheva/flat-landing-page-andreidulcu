import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Feature.module.css';

class Feature extends Component {
static propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

  static defaultProps = {
    img: '',
    title: '',
    subtitle: '',
  }

  render() {
  // console.log(this.props);

    return (
      <div className={styles.feature}>
        <div><img src={this.props.img} alt="feature" /></div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.subtitle}>{this.props.subtitle}</div>
      </div>
    );
  }
}


export default Feature;
