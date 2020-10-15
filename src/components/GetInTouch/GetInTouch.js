import React from 'react';
import styles from './GetInTouch.module.scss';
import DoubleButton from 'components/DoubleButton/DoubleButton';

const doubleButtonStyleOverride = { margin: 0 };

const GetInTouch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.info}>
          <h3 className={styles.title}>Get in Touch</h3>
          <p className={styles.text}>
            Interested in joining? Want to collaborate with
            us? Send us a email and we will get back to you.
          </p>
          <DoubleButton
            style={doubleButtonStyleOverride}
            primary="Contact"
            primaryLink="/collaborate/"
            secondary="Publications"
            secondaryLink="/publications/"
          />
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="static/images/white-clemson-tiger-paw.svg"
            alt="White Clemson Tiger Paw"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
