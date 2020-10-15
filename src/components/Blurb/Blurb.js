import styles from './Blurb.module.scss';

let image = '';

const Blurb = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={'/static/images/pacman-ghost.svg'}
      />
      <div className={styles.card}>
        <p className={styles.text}>
          <span className={styles.blue}>
            TRACE Research group{' '}
          </span>
          focuses on human-centered computing to enhance
          societies capabilties for
          <span className={styles.blue}>
            {' '}
            human and agent{' '}
          </span>
          teaming.
        </p>
      </div>
    </div>
  );
};

export default Blurb;
