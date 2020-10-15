import React from 'react';
import styles from './ContactContent.module.scss';

const ContactContent = ({ children }) => {
  return (
    <React.Fragment>
      <style>
        {`
          .ContactContentHack li::before {
            background-image: url(/static/icons/gameday-sky-500/icons8-checked_checkbox.svg);
          }
        `}
      </style>
      <div
        className={`${styles.content} ContactContentHack`}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default ContactContent;
