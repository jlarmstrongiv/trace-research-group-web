import React from 'react';
import styles from './MobilePerson.module.scss';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation';
import { examplePerson } from '../../data/people/index';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import Head from 'next/head';

const MobilePerson = ({ person, nameSlug }) => {
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
        <div className={styles.content}>
          <h1 className={styles.name}>{person.name}</h1>
          <h2 className={styles.program}>
            {person.program}
          </h2>
          <div className={styles.card}>
            <img
              className={styles.avatar}
              width="100%"
              src={`static/people/optimized/3x4/${nameSlug}.jpg`}
              alt={`${person.name}’s headshot.`}
            />
            <SocialMedia.Default person={person} />
            <p className={styles.description}>
              {person.description}
            </p>
          </div>
        </div>
        <MobileNavigation.Default isContent={false} />
      </div>
    </React.Fragment>
  );
};

export default MobilePerson;
