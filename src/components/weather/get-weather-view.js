import React, { useState } from "react";
import GetWeather from "./get-weather";
import { getWeatherData } from "../../api";
import FilterCity from "./filter-city";

const GetWeatherView = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");

  const handleChange = e => setCity(e.target.value);
  const handleKeyPress = async e => {
    if (e.keyCode === 13) {
      const weatherData = await getWeatherData(city);
      setWeather(weatherData);
    }
  };
  return (
    <div>
      <FilterCity city={city} handleChange={handleChange} handleKeyPress={handleKeyPress} />
      {weather ? <GetWeather weatherData={weather} /> : null}
    </div>
  );
};

export default GetWeatherView;
