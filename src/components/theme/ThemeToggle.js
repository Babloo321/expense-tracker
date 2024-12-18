import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './styles.module.css';
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark_mode', isDarkMode);
  }, []);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark_mode', !darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    // <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className={darkMode ? styles.dark_mode : styles.light_mode}>
      <button className={styles.theme_toggle_button} onClick={toggleTheme}>
        {darkMode ? <FaSun className={styles.sun} /> : <FaMoon className={styles.moon} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
