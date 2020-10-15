import ActiveLink from 'utilities/ActiveLink';
import styles from './MobileNavigation.module.scss';

const MobileNavigation = ({ children, isContent }) => {
  return (
    <nav
      className={styles.nav}
      style={{
        backgroundColor: isContent
          ? 'var(--white)'
          : 'var(--primaries-700)',
      }}
    >
      <ul className={styles.ul}>{children}</ul>
    </nav>
  );
};

MobileNavigation.Item = ({ children, href, iconPath }) => {
  return (
    <li className={styles.li}>
      <ActiveLink
        href={href}
        activeClassName={styles.active}
      >
        <a className={styles.a}>
          <img
            src={iconPath}
            alt=""
            width="30px"
            height="30px"
          />
          <span>{children}</span>
        </a>
      </ActiveLink>
    </li>
  );
};

MobileNavigation.Default = ({ isContent }) => {
  return (
    <MobileNavigation isContent={isContent}>
      <MobileNavigation.Item
        href="/"
        iconPath={
          'static/icons/gameday-sky-500/icons8-home_page.svg'
        }
      >
        Home
      </MobileNavigation.Item>
      <MobileNavigation.Item
        href="/publications/"
        iconPath={
          'static/icons/gameday-sky-500/icons8-contract.svg'
        }
      >
        Publications
      </MobileNavigation.Item>
      <MobileNavigation.Item
        href="/people/"
        iconPath={
          'static/icons/gameday-sky-500/icons8-people.svg'
        }
      >
        Team
      </MobileNavigation.Item>
      <MobileNavigation.Item
        href="/collaborate/"
        iconPath={
          'static/icons/gameday-sky-500/icons8-secured_letter.svg'
        }
      >
        Contact
      </MobileNavigation.Item>
    </MobileNavigation>
  );
};

export default MobileNavigation;
