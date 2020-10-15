import React from 'react';
import styles from './SocialMedia.module.scss';

const SocialMedia = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
SocialMedia.LinkedIn = ({ href }) => {
  return (
    <a href={href} target="_blank" className={styles.a}>
      <img
        className={styles.icon}
        src="static/icons/gameday-sky-500/icons8-linkedin.svg"
        width="30px"
        height="30px"
      />
      <span className={styles.text}>LinkedIn</span>
    </a>
  );
};
SocialMedia.GitHub = ({ href }) => {
  return (
    <a href={href} target="_blank" className={styles.a}>
      <img
        className={styles.icon}
        src="static/icons/gameday-sky-500/icons8-octocat.svg"
        width="30px"
        height="30px"
      />
      <span className={styles.text}>GitHub</span>
    </a>
  );
};
SocialMedia.PersonalWebsite = ({ href }) => {
  return (
    <a href={href} target="_blank" className={styles.a}>
      <img
        className={styles.icon}
        src="static/icons/gameday-sky-500/icons8-globe_earth.svg"
        width="30px"
        height="30px"
      />
      <span className={styles.text}>Personal Website</span>
    </a>
  );
};
SocialMedia.GoogleScholar = ({ href }) => {
  return (
    <a href={href} target="_blank" className={styles.a}>
      <img
        className={styles.icon}
        src="static/icons/gameday-sky-500/icons8-mortarboard.svg"
        width="30px"
        height="30px"
      />
      <span className={styles.text}>Google Scholar</span>
    </a>
  );
};
SocialMedia.Twitter = ({ href }) => {
  return (
    <a href={href} target="_blank" className={styles.a}>
      <img
        className={styles.icon}
        src="static/icons/gameday-sky-500/icons8-twitter.svg"
        width="30px"
        height="30px"
      />
      <span className={styles.text}>Twitter</span>
    </a>
  );
};
SocialMedia.Resume = ({ href }) => {
  return (
    <a href={href} target="_blank" className={styles.a}>
      <img
        className={styles.icon}
        src="static/icons/gameday-sky-500/icons8-rules.svg"
        width="30px"
        height="30px"
      />
      <span className={styles.text}>Resume</span>
    </a>
  );
};
SocialMedia.CV = ({ href }) => {
  return (
    <a href={href} target="_blank" className={styles.a}>
      <img
        className={styles.icon}
        src="static/icons/gameday-sky-500/icons8-contract.svg"
        width="30px"
        height="30px"
      />
      <span className={styles.text}>Curriculum Vitae</span>
    </a>
  );
};

SocialMedia.Default = ({
  person: {
    personalWebsiteUrl,
    linkedInUrl,
    googleScholarUrl,
    gitHubUrl,
    twitterUrl,
    resumeUrl,
    cvUrl,
  },
}) => {
  return (
    <SocialMedia>
      {personalWebsiteUrl ? (
        <SocialMedia.PersonalWebsite
          href={personalWebsiteUrl}
        />
      ) : null}
      {linkedInUrl ? (
        <SocialMedia.LinkedIn href={linkedInUrl} />
      ) : null}
      {googleScholarUrl ? (
        <SocialMedia.GoogleScholar
          href={googleScholarUrl}
        />
      ) : null}
      {gitHubUrl ? (
        <SocialMedia.GitHub href={gitHubUrl} />
      ) : null}
      {twitterUrl ? (
        <SocialMedia.Twitter href={twitterUrl} />
      ) : null}
      {resumeUrl ? (
        <SocialMedia.Resume href={resumeUrl} />
      ) : null}
      {cvUrl ? <SocialMedia.CV href={cvUrl} /> : null}
    </SocialMedia>
  );
};

export default SocialMedia;
