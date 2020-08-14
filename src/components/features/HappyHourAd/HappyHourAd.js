import React from 'react';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  render()  {
    return (
      <div>
        <h3 className={styles.title}></h3>
        <p className={styles.promoDescription}></p>
      </div>
    );
  }
}

export default HappyHourAd;