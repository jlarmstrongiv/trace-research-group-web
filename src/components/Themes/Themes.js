import React from 'react';
import styles from './Theme.module.scss';
import Link from 'next/link';

const CustomLink = ({ href, as, children }) => {
  const isExternalLink = href.indexOf('http') === 0;

  if (isExternalLink) {
    return <a href={href}>{children}</a>;
  }
  return (
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
  );
};

const ThemeType = ({
  divider,
  href,
  title,
  description,
}) => {
  return (
    <React.Fragment>
      <CustomLink href={href}>
        <div className={styles.container}>
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

const Theme = () => {
  return (
    <div className={styles.topContainer}>
      <ThemeType
        href={'/themes/human-agent-teaming/'}
        title="Human Agent teaming"
        description="General human teaming"
      />
      <ThemeType
        href={'/themes/multi-agent-systems/'}
        title="Multi Agent Systems"
        description="What are the patterns and behavior in multi agent systems"
        divider
      />
      <ThemeType
        href={'/themes/mental-models/'}
        title="Mental Models"
        description="How do mental models effect teaming in agent behaviour"
        divider
      />
      <ThemeType
        href={'/themes/communication/'}
        title="Communication"
        description="What happens to communication in teams when technology is a factor"
        divider
      />
      <ThemeType
        href={'/themes/team-cognition/'}
        title="Team Cognition"
        description="How can cognition be explored in teaming"
        divider
      />
      <ThemeType
        href={'/themes/human-agent-team-org/'}
        title="Human Agent Team Organization"
        description="How is human agent teaming affected in hierarchical structures"
        divider
      />

      <ThemeType
        href={'/themes/situational-awareness/'}
        title="Situational Awareness"
        description="Situations in teaming enviornments and how cognition is impacted"
        divider
      />
      <ThemeType
        href={'/themes/game-theory/'}
        title="Game Theory"
        description="Agent behaviour under game theory"
        divider
      />

      <ThemeType
        href={'/themes/trust/'}
        title="Trust"
        description="How is trust impacted when humans interact with agents"
        divider
      />

      <ThemeType
        href={'/themes/health-care/'}
        title="Health Care"
        description="The intersection between health, technology, and teams"
        divider
      />
    </div>
  );
};

export default Theme;
