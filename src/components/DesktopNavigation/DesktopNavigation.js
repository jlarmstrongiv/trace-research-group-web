import React from 'react';
import styles from './DesktopNavigation.module.scss';
import ActiveLink from 'utilities/ActiveLink';

const DesktopNavigation = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <a
              href="http://www.clemson.edu/"
              target="_blank"
            >
              <img
                src="static/images/white-clemson-tiger-paw.svg"
                alt="White Clemson Tiger Paw"
                width="48px"
                height="48px"
              />
            </a>
            <div className={styles.info}>
              <p className={styles.university}>
                <a
                  href="http://www.clemson.edu/"
                  target="_blank"
                >
                  Clemson University
                </a>
              </p>
              <p className={styles.department}>
                <a
                  href="https://www.clemson.edu/cecas/departments/computing/"
                  target="_blank"
                >
                  School of Computing
                </a>
              </p>
            </div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.ul}>{children}</ul>
          </nav>
        </header>
        <hr className={styles.hr} />
      </div>
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

const mw = { maxWidth: '400px', marginLeft: '-32px' };

DesktopNavigation.Menu = () => {
  return (
    <div style={mw}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
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
        </ul>
      </nav>
    </div>
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
