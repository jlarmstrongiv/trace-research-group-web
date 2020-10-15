import React from 'react';
import styles from './Layout.module.scss';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation';
import DesktopNavigation from 'components/DesktopNavigation/DesktopNavigation';

// the splash and children are on different html layers

const Layout = ({ splash, children }) => {
  return (
    <div className={styles.container}>
      <DesktopNavigation.Default />
      {splash}
      <main
        className={`${styles.content} ${
          children ? '' : styles.fullLengthBackground
        }`}
      >
        {children}
      </main>
      <MobileNavigation.Default
        isContent={children ? true : false}
      />
    </div>
  );
};

export default Layout;
