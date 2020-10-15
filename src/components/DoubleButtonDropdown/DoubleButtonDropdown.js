import React from 'react';
import styles from './DoubleButtonDropdown.module.scss';
import Link from 'next/link';

const DoubleButtonDropdown = ({ position }) => {
  const [program, setProgram] = React.useState('default');

  return (
    <div className={styles.container}>
      <select
        className={styles.secondary}
        onChange={(event) => {
          setProgram(event.target.value);
        }}
      >
        <option value="default">Select Program</option>
        <option value="cflathm@g.clemson.edu">
          Computer Science
        </option>
        <option value="bschelb@g.clemson.edu">
          Psychology
        </option>
        <option value="rzhang2@g.clemson.edu">
          Math & Engineering
        </option>
        <option value="cflathm@g.clemson.edu">Other</option>
      </select>

      <a
        className={styles.primary}
        href={
          program === 'default'
            ? ''
            : `mailto:${program}?cc=mcneese@clemson.edu&subject=${encodeURIComponent(
                position,
              )}%20Application%20for%20TRACE%20Research%20Group`
        }
      >
        Email
      </a>
    </div>
  );
};

export default DoubleButtonDropdown;
