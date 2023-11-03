import React from 'react';
import styles from './button.module.scss';
import { useNavigate } from 'react-router-dom';

export const CloseButton = () => {
  const navigate = useNavigate();

  const handleClickClose = () => {
    navigate(`/`);
  };

  return (
    <div className={styles.clbtn1} onClick={handleClickClose}>
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
