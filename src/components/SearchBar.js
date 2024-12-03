import React, { useState, useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "../contexts/WeatherContext";

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  input {
    padding: 10px;
    font-size: 16px;
    width: 250px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const SearchBar = () => {
  const { fetchWeather } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <SearchBarWrapper>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
