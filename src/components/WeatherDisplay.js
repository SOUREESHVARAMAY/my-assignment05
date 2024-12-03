import React, { useContext } from "react";
import styles from "../styles/WeatherDisplay.module.css";
import { WeatherContext } from "../contexts/WeatherContext";

const WeatherDisplay = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  if (!weatherData) return <p className={styles.message}>Search for a city!</p>;

  return (
    <div className={styles.container}>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
