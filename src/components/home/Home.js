import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
function Home() {
  const [expense,setExpense] = useState({});
  const [budget,setBudget] = useState(0);
  useEffect(() => {
    const storeExpense = localStorage.getItem('expense');
    if (storeExpense) {
      setExpense(JSON.parse(storeExpense));
    }
    const storeBudget = localStorage.getItem('budget');
    if (storeBudget) {
      setBudget(JSON.parse(storeBudget));
    }
  },[])
  return (
    <div className={styles.home}>
      <div className={styles.dashboard}>
        {' '}
        <h1 className={styles.balance}>YOUR BALANCE IS: $
        {
          expense.amount && budget ? budget - expense.amount : 0
          }
          </h1>{' '}
        <div className={styles.summary}>
          {' '}
          <div className={styles.incomeBudget}>
            {' '}
            <h2>Income / Budget</h2> <p>$
            {
              budget ? budget : 0
              }
              </p>{' '}
          </div>{' '}
          <div className={styles.expenses}>
            {' '}
            <h2>Expenses</h2> <p>$
            {
          expense.amount ? expense.amount : 0
          }
          </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className={styles.transactionHistory}>
          {' '}
          <h3>Transaction History</h3>{' '}
          
         {
          expense.label ? <p>{expense.label}&nbsp;&nbsp;{expense.amount}</p> : <p> Budget has been reset to 0 <span>$-0</span></p>
         }
        </div>{' '}
        <div className={styles.pieChart}>
          {' '}
          <h3>Expenses vs Budget</h3>{' '}
          <div className={styles.chart}>
            {' '}
            {/* Placeholder for pie chart */}{' '}
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  );
}

export default Home;
