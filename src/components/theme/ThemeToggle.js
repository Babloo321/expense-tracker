import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './styles.module.css';
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark_mode', !darkMode);
  };

  return (
    // <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className={darkMode ? styles.dark_mode : styles.light_mode}>
      <button className={styles.theme_toggle_button} onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
