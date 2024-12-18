import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

function Home() {
  const [expense, setExpense] = useState({ amounts: [], categories: '' });
  const [budget, setBudget] = useState(0);
  const [label, setLabel] = useState([]);

  useEffect(() => {
    const storedExpense = localStorage.getItem('expense');
    if (storedExpense) {
      setExpense(JSON.parse(storedExpense));
    }
    const storeBudget = localStorage.getItem('budget');
    if (storeBudget) {
      setBudget(JSON.parse(storeBudget));
    }

    const storeLabel = localStorage.getItem('label');
    if (storeLabel) {
      setLabel(JSON.parse(storeLabel));
    }
  }, []);

  const data = [
    { name: 'Expense', value: expense.amounts.length > 0 ? expense.amounts.reduce((acc, curr) => acc + curr, 0) : 0 },
    { name: 'Remaining Budget', value: budget },
  ];
  const COLORS = ['#FF6384', '#36A2EB'];

  // Your data here backgroundColor: ['#36A2EB', '#FF6384'], // Colors for each section }, ],
  return (
    <div className={styles.home}>

      <div className={styles.dashboard}>

        <h1 className={styles.balance}>
          Balance: <FaIndianRupeeSign className={styles.rupees}/>
          <span className={styles.amount}>
              {budget}
          </span>
        </h1>

        <div className={styles.summary}>
          <div className={styles.incomeBudget}>
          <FaArrowCircleDown className={styles.down}/>
          <div className={styles.expenses.text}>
            <h2>Budget</h2> 
            <p><FaIndianRupeeSign className={styles.rupees}/>{budget ? budget : 0}</p>
            </div>
          </div>

          <div className={styles.expenses}>
          <FaArrowCircleUp className={styles.up}/>
          <div className={styles.expenses.text}>
            <h2>Expenses</h2>{' '}
            <p>
              <FaIndianRupeeSign className={styles.rupees}/>{' '}
              {expense.amounts.length > 0
                ? expense.amounts.reduce((acc, curr) => acc + curr, 0)
                : 0}
            </p>
            </div>
          </div>
        </div>

        <hr />
        <div className={styles.chartHistory}>
          <div className={styles.transactionHistory}>
            <h3>Transaction History</h3>

            <ul>
              {label.map((item, index) => (
                <li key={index}>
                  <span>{item}</span>
                  <span>{expense.categories.length > 0 ? expense.categories[index] === '' ? 'Uncategorized' : expense.categories[index] : 'Uncategorized'}</span>
                  <span><FaIndianRupeeSign className={styles.liRupees}/>{expense.amounts.length > 0 ? expense.amounts[index] : 0}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.pieChart}>
            <h2>Budget vs Expense</h2>
            <PieChart width={300} height={300} className={styles.pie}>
              <Pie
                data={data}
                cx={150}
                cy={150}
                labelLine={false}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                className={styles.pie}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip /> <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
