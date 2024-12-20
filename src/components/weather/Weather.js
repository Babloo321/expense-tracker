
import React from 'react';
import styles from './styles.module.css';
import weatherImage from '../../images/weather.webp';
import { useNavigate } from 'react-router-dom';
const WeatherApp = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation('/weather-search');
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={weatherImage} alt="Weather Forecast App" className={styles.image} />
      </div>
      <h1 className={styles.title}>Weather Forecast</h1>
      <p className={styles.description}>
        It’s the newest weather information. It has a bunch of features and that includes most of the ones that every weather app has.
      </p>
      <button className={styles.button} onClick={handleClick}>Get Started</button>
    </div>
  );
};

export default WeatherApp;
