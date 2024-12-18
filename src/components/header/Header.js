import React from 'react'
import styles from './styles.module.css'
import { FaBook } from "react-icons/fa6";
import ThemeToggle from '../theme/ThemeToggle';
function Header() {
  const handleLogoClick = () => {
    window.location.reload();
  }
  return (
    <div className={styles.header}>
      <FaBook className={styles.icon} onClick={handleLogoClick}/> <h1 className={styles.heading}>Expense Tracker</h1>
      <ThemeToggle className={styles.icon}/>

    </div>
  )
}

export default Header