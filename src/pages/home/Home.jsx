import React from 'react';
import { TransactionForm, TransactionList } from '../../components';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <TransactionList />
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};
