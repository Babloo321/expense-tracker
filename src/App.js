import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './app.module.css';
import Home from './components/home/Home.js'
import Expense from './components/expense/Expense.js'
import Budget from './components/budget/Budget.js';
import Categories from './components/categories/Categories.js';
import Header from './components/header/Header.js';
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
function App() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <>
    <Header />
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

export default App;
