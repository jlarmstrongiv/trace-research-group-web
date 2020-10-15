import React from 'react';
import Fuse from 'fuse.js';
import { examplePublication } from 'data';
import styles from './Publications.module.scss';
import flatten from 'flat';
import Publication from 'components/Publication/Publication';

const Publications = ({ publications }) => {
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState(
    publications,
  );

  const fuse = React.useMemo(() => {
    // https://github.com/krisk/Fuse/issues/210
    return new Fuse(publications, {
      // keys: Object.keys(flatten(examplePublication)),
      keys: [
        'citationFormats.mla',
        'citationFormats.apa',
        'citationFormats.chicago',
        'citationFormats.harvard',
        'citationFormats.vancouver',
        // 'bibtex.author.0.family',
        // 'bibtex.author.0.given',
        'bibtex.collection-number',
        'bibtex.container-title',
        'bibtex.id',
        // 'bibtex.issued.date-parts.0.0',
        'bibtex.page',
        'bibtex.publisher',
        'bibtex.title',
        'bibtex.type',
        'bibtex.volume',
      ],
      threshold: 0.7,
    });
  }, [publications]);

  React.useEffect(() => {
    if (search) {
      setResults(fuse.search(search));
    } else {
      setResults(publications);
    }
  }, [search]);

  // https://stackoverflow.com/a/57272554
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const targetRef = React.useRef();

  React.useEffect(() => {
    if (targetRef.current) {
      setHeight(targetRef.current.offsetHeight);
      setWidth(targetRef.current.offsetWidth);
    }
  }, []);

  return (
    <div ref={targetRef} style={{ minHeight: height }}>
      <div className={styles.searchContainer}>
        <label
          className={styles.search}
          htmlFor="search"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        >
          <img
            className={styles.icon}
            src="static/icons/gameday-sky-700/icons8-search.svg"
            width="30px"
            height="30px"
          />
          <input
            id="search"
            className={styles.input}
            type="text"
            placeholder={
              width > 490
                ? 'Search for titles, authors, and more…'
                : 'Search'
            }
            autoFocus="autofocus"
            aria-label="Search"
          />
        </label>
      </div>
      {results.map((publication, index) => (
        <Publication
          key={publication.bibtext.id}
          publication={publication}
          divider={index !== publications.length - 1}
        >
          {publication.bibtext.title}
        </Publication>
      ))}
    </div>
  );
};

export default Publications;
