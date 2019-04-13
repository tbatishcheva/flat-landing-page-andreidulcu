import React, { Component } from 'react';
import styles from './Features.module.css';
import Container from '../Container/Container';
import Feature from '../Feature/Feature';
import growUp from './graph.svg';
import web from './web.svg';
import table from './table.svg';
import imac from './imac.svg';
import pie from './pie.svg';
import chart from './chart.svg';

class Features extends Component {
  render() {
    return (
      <div className={styles.features}>
        <Container>
          <div className={styles.content}>
            <div className={styles.title}>Features</div>
            <div className={styles.subtitle}>Download anything now a days</div>
            <div>
              <div className={styles.grid}>
                <Feature
                  img={growUp}
                  title="Growing Up"
                  subtitle="Create a list with all possible keywords that fit to your product service or business field."
                />
                <Feature
                  img={web}
                  title="Fix it"
                  subtitle="Create a list with all possible keywords that fit to your product, service or business field."
                />
                <Feature
                  img={table}
                  title="Plan your shit"
                  subtitle="Create a list with all possible keywords that fit to your product, service or business field."
                />
                <Feature
                  img={imac}
                  title="Growing Up"
                  subtitle="Create a list with all possible keywords that fit to your product, service or business field."
                />
                <Feature
                  img={pie}
                  title="Share it"
                  subtitle="Create a list with all possible keywords that fit to your product, service or business field."
                />
                <Feature
                  img={chart}
                  title="See them numbers"
                  subtitle="Create a list with all possible keywords that fit to your product, service or business field."
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Features;
