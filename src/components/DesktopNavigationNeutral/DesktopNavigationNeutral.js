import React from 'react';
import styles from './DesktopNavigationNeutral.module.scss';
import ActiveLink from 'utilities/ActiveLink';

const DesktopNavigation = ({ children }) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>{children}</ul>
        </nav>
      </header>
      <hr className={styles.hr} />
    </React.Fragment>
  );
};

DesktopNavigation.Item = ({ children, href }) => {
  return (
    <li className={styles.li}>
      <ActiveLink
        href={href}
        activeClassName={styles.active}
      >
        <a className={styles.a}>{children}</a>
      </ActiveLink>
    </li>
  );
};

DesktopNavigation.Interpunct = () => {
  return <span className={styles.interpunct}>·</span>;
};

DesktopNavigation.Default = () => {
  return (
    <DesktopNavigation>
      <DesktopNavigation.Item href="/">
        Home
      </DesktopNavigation.Item>
      <DesktopNavigation.Interpunct />
      <DesktopNavigation.Item href="/publications/">
        Publications
      </DesktopNavigation.Item>
      <DesktopNavigation.Interpunct />
      <DesktopNavigation.Item href="/people/">
        Team
      </DesktopNavigation.Item>
      <DesktopNavigation.Interpunct />
      <DesktopNavigation.Item href="/collaborate/">
        Contact
      </DesktopNavigation.Item>
    </DesktopNavigation>
  );
};

export default DesktopNavigation;
