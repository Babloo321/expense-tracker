import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import homeImage from '../../../images/home.jpg';
const WeatherSearch = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          fetchWeather(latitude, longitude);
          // fetchForecast(latitude, longitude);
        },
        () => {
          setError('Unable to retrieve your location');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [dateTime]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };
  const formatYear = (date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      // day: 'numeric'
    });
  };
  const fetchWeather = async (lat, lon) => {
    const apiKey = 'e0f3ebf4b8e9c3c2a6b5856d6b2ff10f'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setCurrentWeather(response.data);
      setError('');
    } catch (err) {
      setError('Unable to fetch weather data');
    }
  };

  // const fetchForecast = async (lat, lon) => {
  //   const apiKey = 'e0f3ebf4b8e9c3c2a6b5856d6b2ff10f'; // Replace with your OpenWeatherMap API key
  //   const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  //   try {
  //     const response = await axios.get(url);
  //     setForecast(response.data.daily);
  //     setError('');
  //   } catch (err) {
  //     setError('Unable to fetch forecast data');
  //   }
  // };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query) {
      const apiKey = 'e0f3ebf4b8e9c3c2a6b5856d6b2ff10f'; // Replace with your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        const { lat, lon } = response.data.coord;
        fetchWeather(lat, lon);
        // fetchForecast(lat, lon);
        setQuery('');
        setLocation({ lat, lon });
        setError('');
      } catch (err) {
        setError('Unable to fetch weather data for the specified location');
      }
    }
  };

  return (
    <div className={styles.weatherContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search for a city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {currentWeather ? (
        <div className={styles.weatherInfo}>
          <TiWeatherPartlySunny className={styles.weatherIcon} />
          <p className={styles.temp}>{currentWeather.main.temp}°</p>
          <h1 className={styles.address}>{currentWeather.name}</h1>
          <img src={homeImage} alt="home" className={styles.image} />
          <hr />
          <div className={styles.clockContainer}>
            <div className={styles.date}>{formatYear(dateTime)}</div>
            <div className={styles.dateTime}>
              <p className={styles.time}>{formatDate(dateTime)}</p>
              <p className={styles.time}>{formatTime(dateTime)}</p>
            </div>
          </div>

          <div className={styles.weatherData}>
            <p>{currentWeather.weather[0].description}</p>
            <p>Humidity: {currentWeather.main.humidity}%</p>
            <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
          </div>
        </div>
      ) : (
        <p>Loading current weather...</p>
      )}
      {/* {forecast ? (
        <div className={styles.forecast}>
          <h2>7-Day Forecast</h2>
          <div className={styles.forecastGrid}>
            {forecast.map((day, index) => (
              <div key={index} className={styles.forecastItem}>
                <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                <p>{day.weather[0].description}</p>
                <p>Temp: {day.temp.day}°C</p>
                <p>Humidity: {day.humidity}%</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading forecast...</p>
      )} */}
    </div>
  );
};

export default WeatherSearch;
