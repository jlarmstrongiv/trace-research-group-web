import React from 'react';
import styles from './DoubleButton.module.scss';
import Link from 'next/link';

const DoubleButton = ({
  primary,
  primaryLink,
  secondary,
  secondaryLink,
  style,
}) => {
  return (
    <div className={styles.container} style={style}>
      <Link href={secondaryLink}>
        <a className={styles.secondary}>{secondary}</a>
      </Link>
      <Link href={primaryLink}>
        <a className={styles.primary}>{primary}</a>
      </Link>
    </div>
  );
};

export default DoubleButton;
