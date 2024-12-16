import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
function Home() {
  const [expense, setExpense] = useState({});
  const [budget, setBudget] = useState(0);
  const [label,setLabel] = useState([]);

  useEffect(() => {
    const storeExpense = localStorage.getItem('expense');
    if (storeExpense) {
      setExpense(JSON.parse(storeExpense));
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
    { name: 'Expense', value: parseFloat(expense.amount) || 0 },
    { name: 'Remaining Budget', value: budget },
  ];
  const COLORS = ['#FF6384', '#36A2EB'];

  // Your data here backgroundColor: ['#36A2EB', '#FF6384'], // Colors for each section }, ],
  return (
    <div className={styles.home}>
      <div className={styles.dashboard}>
        <h1 className={styles.balance}>
          YOUR BALANCE IS: $
          <span className={styles.amount}>
            {expense.amount && budget ? budget - expense.amount : 0}
          </span>
        </h1>

        <div className={styles.summary}>
          <div className={styles.incomeBudget}>
            <h2>Income / Budget</h2> <p>${budget ? budget : 0}</p>
          </div>

          <div className={styles.expenses}>
            <h2>Expenses</h2> <p>${expense.amount ? expense.amount : 0}</p>
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
                <span>${expense.amount ? expense.amount : 0}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.pieChart}>
            <h2>Budget vs Expense</h2>
            <PieChart width={400} height={400}>
              {' '}
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {' '}
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}{' '}
              </Pie>{' '}
              <Tooltip /> <Legend />{' '}
            </PieChart>
          </div>

      </div>

      </div>
    </div>
  );
}

export default Home;
