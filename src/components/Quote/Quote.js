import React from 'react';
import styles from './Quote.module.scss';

const Quote = ({ children }) => {
  return (
    <React.Fragment>
      <style>
        {`
          .QuoteHack {
            background-image: url(/static/images/pacman-ghost.svg);
          }
        `}
      </style>
      <div className={`${styles.container} QuoteHack`}>
        <h2 className={styles.quote}>{children}</h2>
      </div>
    </React.Fragment>
  );
};

export default Quote;
