import styles from './InTouch.module.scss';
import DoubleButton from 'components/DoubleButton/DoubleButton';

const InTouch = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.card}>
          <div>
            <h1 className={styles.heading}>Get In Touch</h1>
          </div>
          <div>
            <p className={styles.text}>
              Interested in joining? Want to collaborate
              with us? Send us a email and we will get back
              to you.
            </p>
          </div>
        </div>
        <div>
          <img
            className={styles.img}
            src="static/images/white-clemson-tiger-paw.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default InTouch;
