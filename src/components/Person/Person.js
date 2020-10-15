import Link from 'next/link';
import styles from './Person.module.scss';

const Person = ({ person, nameSlug, divider }) => {
  const { name, program } = person;

  return (
    <React.Fragment>
      <Link
        href="/people/[personSlug]"
        as={`/people/${nameSlug}`}
      >
        <a>
          <div className={styles.container}>
            <img
              src={`static/people/optimized/square/${nameSlug}.jpg`}
              alt=""
              className={styles.avatar}
            />
            <div className={styles.info}>
              <div className={styles.name}>{name}</div>
              <div className={styles.program}>
                {program}
              </div>
            </div>
            <img
              width="30px"
              height="30px"
              src="static/icons/cool-grey-300/icons8-forward.svg"
              alt={`Go to ${name}’s spotlight`}
            />
          </div>
        </a>
      </Link>
      <hr className={divider ? styles.divider : ''} />
    </React.Fragment>
  );
};

export default Person;
