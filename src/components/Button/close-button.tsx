import React from 'react';
import styles from './button.module.scss';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

export const CloseButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClickClose = () => {
    router.push(`/?${searchParams.toString()}`);
  };

  return (
    <div data-testid="close-button" className={styles.clbtn1} onClick={handleClickClose}>
      <div>
        <span className={styles.left}>
          <span className={styles.circle_left}></span>
          <span className={styles.circle_right}></span>
        </span>
        <span className={styles.right}>
          <span className={styles.circle_left}></span>
          <span className={styles.circle_right}></span>
        </span>
      </div>
    </div>
  );
};
