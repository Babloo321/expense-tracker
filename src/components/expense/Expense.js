import React, { useState } from 'react';
import styles from './styles.module.css';

const Expense = () => {
  const [expense, setExpense] = useState({
    amount: 0,
    category: '',
    label: '',
  });

  const handleResetBudget = () => {
    setExpense({
      amount: 0,
      category: '',
      label: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleAddToBudget = () => {
    setExpense((prevBudget) => ({
      ...prevBudget,
      amount: Number(prevBudget.amount) + parseFloat(Number(expense.amount)),
    }));
    localStorage.setItem('expense', JSON.stringify(expense));
  };

  return (
    <div className={styles.budget}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>Add an Expense</h2>
          <p>Adds on to your current expense amount.</p>
          <label htmlFor="label">Label</label>
          <input
            type="text"
            name="label"
            placeholder="Ex: Christmas bonus"
            value={expense.label}
            onChange={handleInputChange}
            className={styles.input}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            placeholder="Ex: 3000"
            value={expense.amount}
            onChange={handleInputChange}
            className={styles.input}
          />
          
        </div>
        <hr />
        <div className={styles.box}>
          <h2>Add a Category to Your Expense</h2>
          <label htmlFor="category">Select a Category</label>
          <select name='category' className={styles.select} onChange={handleInputChange}>
            <option value="" disabled selected hidden>Select a Category or Create a new one</option>
            <option value="Entertainment" className={styles.option}>Entertainment</option>
            <option value="Groceries" className={styles.option}>Groceries</option>
            <option value="Uncategorized" className={styles.option}>Uncategorized</option>
          </select>
          <button onClick={handleAddToBudget} className={styles.button}>
            Add To Expense
          </button>
        </div>
        <hr />
        <div className={styles.box}>
          <h2>Reset Your Budget</h2>
          <p>Resets your budget back to 0</p>
          <button onClick={handleResetBudget} className={styles.btn}>
            Reset Budget
          </button>
          <h3>Current Budget: ${expense.amount}</h3>
        </div>
      </div>
    </div>
  );
};

export default Expense;
