import React, { useState } from 'react';
import styles from './styles.module.css';

const Budget = () => {
  const [budget, setBudget] = useState(0);
  // const [amount, setAmount] = useState(0);

  const handleBudget = (e) => {
    setBudget(parseFloat(e.target.value));
  };

  const handleBudgetAdd = (e) => {
    e.preventDefault();
    // localStorage.setItem("budget", JSON.stringify(budget));
    let prevVal = parseFloat(localStorage.getItem("budget")) || 0;
    let updatedBudget = parseFloat(prevVal) + parseFloat(budget) || prevVal + parseFloat(budget);
    localStorage.setItem("budget", updatedBudget);
    setBudget(0);
  };

  // const handleAmount = (e) => {
  //   setAmount(parseFloat(e.target.value));
  //   localStorage.setItem("amount", JSON.stringify(amount));
  //   setAmount(0);
  //   setLabel('');
  // };

  // const handleAddToBudget = () => {
  //   let prevVal = parseFloat(localStorage.getItem("budget")) || 0;
  //   let updatedBudget = parseFloat(prevVal) + parseFloat(budget) || prevVal + parseFloat(budget);
  //   localStorage.setItem("budget", updatedBudget);
  // };

  const handleResetBudget = () => {
    setBudget(0);
    // setAmount(0);
    // setLabel('');
    localStorage.setItem("budget", 0);
    localStorage.setItem("amount", 0);
  };

  return (
    <div className={styles.budget}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>Set Your Income / Budget</h2>
          <p>Sets your income / budget to the entered value.</p>
          <label htmlFor="amount">Enter your budget</label>
          <input
            type="number"
            name="amount"
            placeholder="Ex: 5000"
            value={budget}
            onChange={handleBudget}
            className={styles.input}
          />
          <button onClick={handleBudgetAdd} className={styles.button}>
            Set Budget
          </button>
        </div>
        <hr />
        {/* <div className={styles.box}>
          <h2>Add an Income Source</h2>
          <p>Adds on to your current income / budget amount.</p>
          <label htmlFor="label">Label</label>
          <input
            type="text"
            name="label"
            placeholder="Ex: Christmas bonus"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className={styles.input}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Ex: 3000"
            value={amount}
            onChange={handleAmount}
            className={styles.input}
          />
          <button onClick={handleAddToBudget} className={styles.button}>
            Add To Budget
          </button>
        </div>
        <hr /> */}
        <div className={styles.box}>
          <h2>Reset Your Budget</h2>
          <p>Resets your budget back to 0</p>
          <button onClick={handleResetBudget} className={styles.btn}>
            Reset Budget
          </button>

          <h3>Current Budget: ${localStorage.getItem("budget")}</h3>
        </div>
      </div>
    </div>
  );
};

export default Budget;
