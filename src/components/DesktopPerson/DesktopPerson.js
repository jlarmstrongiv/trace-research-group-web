import React from 'react';
import styles from './DesktopPerson.module.scss';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import DesktopNavigationNeutral from 'components/DesktopNavigationNeutral/DesktopNavigationNeutral';
import Head from 'next/head';

const DesktopPerson = ({ person, nameSlug }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{person.name}</title>
        <meta
          name="description"
          content="The members of TRACE research group"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <DesktopNavigationNeutral.Default />
          <div className={styles.content}>
            <h1 className={styles.heading}>
              {person.name}
            </h1>
            <h2 className={styles.summary}>
              {person.program}
            </h2>
            <p className={styles.description}>
              {person.description}
            </p>
            <SocialMedia.Default person={person} />
          </div>
        </div>
        <div className={styles.right}>
          <img
            className={styles.background}
            src={`static/people/optimized/3x4/${nameSlug}.jpg`}
            alt=""
          />
          <div
            className={`${styles.primarySquare} ${styles.squareOne}`}
          ></div>
          <div
            className={`${styles.primarySquare} ${styles.squareTwo}`}
          ></div>
          <div
            className={`${styles.primarySquare} ${styles.squareThree}`}
          ></div>
          <div
            className={`${styles.primarySquare} ${styles.squareFour}`}
          ></div>
          <div
            className={`${styles.primarySquare} ${styles.squareFive}`}
          ></div>
          <div className={styles.scrim} />

          <img
            className={styles.img}
            src={`static/people/optimized/3x4/${nameSlug}.jpg`}
            alt={`${person.name}’s headshot.`}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DesktopPerson;
