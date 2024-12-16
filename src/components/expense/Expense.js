import React, { useState } from 'react';
import styles from './styles.module.css';

const Expense = () => {
  const [expense, setExpense] = useState({
    amount: 0,
    category: '',
  });

  const handleResetBudget = () => {
    setExpense({
      amount: 0,
      category: '',
    });
    localStorage.removeItem('expense');
    localStorage.removeItem('label');
  };

  const [label, setLabel] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleLabelChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleAddToBudget = () => {
    setExpense((prevExpense) => {
      const updatedAmount = parseFloat(prevExpense.amount) + parseFloat(expense.amount);
      const updatedExpense = { ...prevExpense, amount: updatedAmount };
      localStorage.setItem('expense', JSON.stringify(updatedExpense));
      return updatedExpense;
    });

    setLabel((prevLabel) => {
      const updatedLabel = [...prevLabel, inputValue];
      localStorage.setItem('label', JSON.stringify(updatedLabel));
      return updatedLabel;
    });

    setInputValue(''); // Clear the input after adding to the label
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
            value={expense.amount}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          >
            <option value="" disabled selected hidden>
              Select a Category or Create a new one
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
