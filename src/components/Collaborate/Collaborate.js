import React from 'react';
import Link from 'next/link';
import styles from './Collaborate.module.scss';

const CustomLink = ({ href, as, children }) => {
  const isExternalLink =
    href.indexOf('http') === 0 ||
    href.indexOf('mailto') === 0;

  if (isExternalLink) {
    return <a href={href}>{children}</a>;
  }
  return (
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
  );
};

const CollaborationType = ({
  divider,
  href,
  title,
  description,
  iconPath,
}) => {
  return (
    <React.Fragment>
      <CustomLink href={href}>
        <div className={styles.container}>
          <div className={styles.iconContainer}>
            <img
              src={iconPath}
              alt=""
              className={styles.icon}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>
              {description}
            </div>
          </div>
          <img
            width="30px"
            height="30px"
            src="static/icons/cool-grey-300/icons8-forward.svg"
            alt={`Go to ’s spotlight`}
          />
        </div>
      </CustomLink>
      <hr className={divider ? styles.divider : ''} />
    </React.Fragment>
  );
};

const Collaborate = () => {
  return (
    <div className={styles.topContainer}>
      <CollaborationType
        href={
          'mailto:mcneese@clemson.edu?subject=Industry%20Collaboration%20with%20TRACE%20Research%20Group'
        }
        title="Industry"
        description="Reach out about potential sponsorships, funding, or internship oppurtunities"
        iconPath="static/icons/ios-filled/gameday-sky-500/icons8-city.svg"
        divider
      />
      <CollaborationType
        href={'/collaborate/graduates/'}
        description="Submit your information to perform research in TRACE Research Group alongside your peers"
        title="Graduate Students"
        iconPath="static/icons/ios-filled/gameday-sky-500/icons8-contract.svg"
        divider
      />
      <CollaborationType
        href={'/collaborate/undergraduates/'}
        title="Undergraduate Students"
        iconPath="static/icons/ios-filled/gameday-sky-500/icons8-backpack.svg"
        description="Work under graduates and Phd candidates to begin your academic journey in research"
      />
    </div>
  );
};

export default Collaborate;
