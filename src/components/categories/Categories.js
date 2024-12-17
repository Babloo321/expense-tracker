import React, { useEffect, useState } from 'react'
import styles from './styles.module.css';
function Categories() {
  const [budget,setBudget] = useState(0);
  const [expese, setExpense] = useState({ amounts: [], categories: [] });
  useEffect(() => {
    const storeBudget = localStorage.getItem('budget');
    if (storeBudget) {
      setBudget(JSON.parse(storeBudget));
    }

    const storeEpense = localStorage.getItem('expense');
    if (storeEpense) {
      setExpense(JSON.parse(storeEpense));
    }
  }, []);
  return (
    <div className={styles.categories}>
    <h1>Categories</h1>
      <div className={styles.budget}>
        <p>Budget</p>
        <p>{budget}</p>
      </div>
      <div className={styles.categoryContainer}>
        {expese.categories.map((category, index) => (
          <div key={index} className={styles.categoryItem}>
            <p>{category === '' ? 'Uncategorized' : category}{'\n'}</p>
            <p>{expese.amounts[index]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories