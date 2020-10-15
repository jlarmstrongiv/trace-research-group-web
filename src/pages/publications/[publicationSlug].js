import React from 'react';
import { publications, people } from 'data';
import slug from 'slug';
import styles from './[publicationSlug].module.scss';
import DesktopNavigation from 'components/DesktopNavigation/DesktopNavigation';

const Publication = ({
  publication,
  publicationSlug,
  authors,
}) => {
  const images = publication.images;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.restraint}>
          <DesktopNavigation.Menu />
          <br />
          <h1 className={styles.title}>
            {publication.bibtext.title}
          </h1>
          <h2 className={styles.caption}>
            {authors.length === 1 ? 'Author' : 'Authors'}
          </h2>
          {authors.map(author => {
            const authorSlug = slug(author.name, {
              lower: true,
            });
            return (
              <div
                key={authorSlug}
                className={styles.author}
              >
                <img
                  src={`static/people/optimized/square/${authorSlug}.jpg`}
                  alt=""
                  className={styles.avatar}
                />
                <div className={styles.info}>
                  <h3>{author.name}</h3>
                  <p className={styles.status}>
                    {author.status}
                  </p>
                </div>
              </div>
            );
          })}

          <h2 className={styles.caption}>Abstract</h2>
          <p className={styles.description}>
            {publication.citationFormats.abstract}
          </p>

          <a
            href={publication.citationFormats.researchGate}
            target="_blank"
            className={styles.button}
          >
            <span>Read on Research Gate</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#336e8c"
            >
              <path d="M22 12l-20 12 5-12-5-12z" />
            </svg>
          </a>
          <br />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.images}>
          {/* `${process.env.publicPath}/static/videos/drones.jpg` */}
          {[...new Array(44)].map((_, index) => (
            <img
              className={styles.image}
              src={`${
                process.env.publicPath
              }/static/publications/${
                publication.citationFormats.pdfFileName
              }/${images[index % images.length]}`}
              alt=""
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publication;

Publication.getInitialProps = ({ query }) => {
  const { publicationSlug } = query;

  const publication = publications.find(publication => {
    return publication.publicationSlug === publicationSlug;
  });

  const authors = people.filter(person =>
    publication.personSlug.find(
      personSlug =>
        personSlug === slug(person.name, { lower: true }),
    ),
  );

  return { publication, publicationSlug, authors };
};
