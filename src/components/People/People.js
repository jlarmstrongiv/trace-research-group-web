import React from 'react';
import Person from 'components/Person/Person';
import slug from 'slug';
import Fuse from 'fuse.js';
import { examplePerson } from 'data/people';
import styles from './People.module.scss';

const People = ({ people }) => {
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState(people);

  const fuse = React.useMemo(() => {
    // https://github.com/krisk/Fuse/issues/210
    return new Fuse(people, {
      keys: Object.keys(examplePerson),
      threshold: 0.4,
    });
  }, [people]);

  React.useEffect(() => {
    if (search) {
      setResults(fuse.search(search));
    } else {
      setResults(people);
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
                ? 'Search for names, social media, and more…'
                : 'Search'
            }
            autoFocus="autofocus"
            aria-label="Search"
          />
        </label>
      </div>
      {results.map((person, index) => {
        const nameSlug = slug(person.name, {
          lower: true,
        });
        return (
          <Person
            key={nameSlug}
            nameSlug={nameSlug}
            person={person}
            divider={index !== people.length - 1}
          />
        );
      })}
    </div>
  );
};

export default People;
