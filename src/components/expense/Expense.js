

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const Expense = () => {
  const [expense, setExpense] = useState({
    amounts: [],
    categories: [],
  });
  const [label, setLabel] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const storeBudget = localStorage.getItem('budget');
    const storedExpense = localStorage.getItem('expense');
    const storedLabel = localStorage.getItem('label');
    
    if (storeBudget) {
      setBudget(JSON.parse(storeBudget));
    }

    if (storedExpense) {
      setExpense(JSON.parse(storedExpense));
    }

    if (storedLabel) {
      setLabel(JSON.parse(storedLabel));
    }
  }, []);

  const handleResetBudget = () => {
    setExpense({
      amounts: [],
      categories: [],
    });
    setLabel([]);
    localStorage.removeItem('expense');
    localStorage.removeItem('label');
    localStorage.removeItem('budget');
  };

  const handleLabelChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmountValue(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };

  const handleAddToBudget = () => {
    const amount = parseFloat(amountValue);

    if (isNaN(amount)) {
      alert('Please enter a valid number for the amount.');
      return;
    }

    // Update expense in localStorage
    const prevExpense = JSON.parse(localStorage.getItem('expense')) || { amounts: [], categories: [] };
    const updatedExpense = {
      ...prevExpense,
      amounts: [...prevExpense.amounts, amount],
      categories: [...prevExpense.categories, categoryValue],
    };
    localStorage.setItem('expense', JSON.stringify(updatedExpense));

    // Update budget in localStorage
    let budget = parseFloat(localStorage.getItem('budget')) || 0;
    const updatedBudget = budget - amount;
    localStorage.setItem('budget', updatedBudget);
    setBudget(updatedBudget);

    // Update label in localStorage
    const prevLabel = JSON.parse(localStorage.getItem('label')) || [];
    const updatedLabel = [...prevLabel, inputValue];
    localStorage.setItem('label', JSON.stringify(updatedLabel));

    // Update state
    setExpense(updatedExpense);
    setLabel(updatedLabel);

    // Clear input values
    setInputValue('');
    setAmountValue('');
    setCategoryValue('');
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
            value={inputValue}
            onChange={handleLabelChange}
            className={styles.input}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            placeholder="Ex: 3000"
            value={amountValue}
            onChange={handleAmountChange}
            className={styles.input}
          />
        </div>
        <hr />
        <div className={styles.box}>
          <h2>Add a Category to Your Expense</h2>
          <label htmlFor="category">Select a Category</label>
          <select
            name="category"
            className={styles.select}
            onChange={handleCategoryChange}
            value={categoryValue}
          >
            <option value="" disabled hidden>
              Select a Category
            </option>
            <option value="Entertainment" className={styles.option}>
              Entertainment
            </option>
            <option value="Groceries" className={styles.option}>
              Groceries
            </option>
            <option value="Uncategorized" className={styles.option}>
              Uncategorized
            </option>
          </select>
          <button onClick={handleAddToBudget} className={styles.button}>
            Add To Expense
          </button>
        </div>
        <hr />
        <div className={styles.box}>
          <h2>Reset Your Transactions</h2>
          <p>Resets your transactions and budget back to 0</p>
          <button onClick={handleResetBudget} className={styles.btn}>
            Reset All Transactions
          </button>
          <h3>Current Budget: ${budget}</h3>
        </div>
      </div>
    </div>
  );
};

export default Expense;
