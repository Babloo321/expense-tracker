import React, { useState } from 'react';
import styles from './expense.module.css';
import Sidebar from './slider/Sidebar';
import Home from './home/Home.js'
import Expense from './expense/Expense.js'
import Budget from './budget/Budget.js'
import Categories from './categories/Categories.js'
// import Header from './header/Header.js';
const RenderComponent = ({ index }) => {
  switch (index) {
    case 0:
      return <Home />
      break;

    case 1:
      return <Expense />
      break;

      case 2:
        return <Budget />
        break;

      case 3:
        return <Categories />
        break;

    default:
      break;
  }
};
const buttons = ['Home', 'Expenses',"Budgets", "Categories"];
function ExpenseTracker() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <>
    <div className={styles.container}>
    
      <Sidebar
      className={styles.Sidebar}
        buttons={buttons}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    
      
      <RenderComponent index={isSelected} className={styles.content} />
    </div>
    </>
  );
}

export default ExpenseTracker;
