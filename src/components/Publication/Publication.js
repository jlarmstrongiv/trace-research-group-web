import Link from 'next/link';
import styles from './Publication.module.scss';

const Publication = ({
  publication,
  children,
  divider,
}) => {
  return (
    <React.Fragment>
      <Link
        href="/publications/[publicationSlug]"
        as={`/publications/${publication.publicationSlug}`}
      >
        <a>
          <div className={styles.container}>
            <div className={styles.citation}>
              {children}
            </div>
          </div>
          <hr className={divider ? styles.divider : ''} />
        </a>
      </Link>
    </React.Fragment>
  );
};

export default Publication;
