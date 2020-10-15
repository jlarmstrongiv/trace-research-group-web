import React from 'react';
import styles from './Splash.module.scss';
import DoubleButton from 'components/DoubleButton/DoubleButton';

const Splash = ({
  heading,
  summary,
  description,
  maxWidth,
  children,
  callToAction,
  doubleButton,
}) => {
  return (
    <React.Fragment>
      <style>
        {`
          .SplashHack {
            background-image: url(${process.env.publicPath}/static/images/pattern.svg);
          }
        `}
      </style>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>{heading}</h1>
          <h2 className={styles.summary}>{summary}</h2>
          <p className={styles.description}>
            {description}
          </p>
          {doubleButton}
          <div
            className={styles.card}
            style={{ maxWidth: `${maxWidth || 740}px` }}
          >
            {children}
          </div>
        </div>
        <div className={styles.backgroundContainer}>
          <div className={styles.primaryBackground}></div>
          <div
            className={`${styles.squares} SplashHack`}
          ></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Splash;
