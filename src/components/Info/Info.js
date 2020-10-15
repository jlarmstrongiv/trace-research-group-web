import React from 'react';
import styles from './Info.module.scss';

const Info = ({ title, text, icon }) => {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.titleContainer}>
        <img className={styles.icon} src={icon} />
        <h4 className={styles.title}>{title}</h4>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

Info.Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Info;
