import React from 'react';
import styles from './Associations.module.scss';

const Associations = ({ collaborations, sponsorships }) => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <h3 className={styles.title}>Sponsorships</h3>
        <div className={styles.grid}>
          {sponsorships.map((sponsorship) => (
            <img
              key={sponsorship.name}
              src={sponsorship.imageUrl}
              alt={sponsorship.name}
              className={styles.item}
            />
          ))}
        </div>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.group}>
        <h3 className={styles.title}>Collaborations</h3>
        <div className={styles.grid}>
          {collaborations.map((collaboration) => (
            <img
              key={collaboration.name}
              src={collaboration.imageUrl}
              alt={collaboration.name}
              className={styles.item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Associations;
