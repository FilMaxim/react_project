import React from 'react';
import styles from './layuot.module.css';
import { DescriptionPerson } from '../Description/description';
import MainPage from '@/pages/main';
import { Popap } from '../Popap/popap';
import { Props, PropsDet } from '@/types';

export const Layout = ({ data }: PropsDet) => {
  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <MainPage data={data} />
        <Popap />
      </div>
      <div className={styles.right}>
        <DescriptionPerson data={data} />
      </div>
    </div>
  );
};
