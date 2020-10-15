import React from 'react';
import styles from './Section.module.scss';

const Section = ({ title, text, children }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.info}>
          <div>
            <h1 className={styles.heading}>{title}</h1>
          </div>
          <div>
            <p className={styles.text}>{text}</p>
          </div>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </React.Fragment>
  );
};

Section.Reverse = ({ title, text, children }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>

        <div className={styles.info}>
          <div>
            <h1 className={styles.heading}>{title}</h1>
          </div>
          <div>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Section.Image = ({ src, alt }) => {
  return (
    <img
      className={styles.image}
      width="100%"
      height="100%"
      src={src}
      alt={alt}
    />
  );
};

Section.Grid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Section;
