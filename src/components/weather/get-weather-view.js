import React, { useState } from "react";
import GetWeather from "./get-weather";
import { getWeatherData } from "../../api";
import FilterCity from "../filter-city/filter-city";
import "./weather.css";
import paris from "../../assets/paris-sm.jpg";

const GetWeatherView = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");

  const handleChange = e => setCity(e.target.value);
  const handleKeyDown = async e => {
    if (e.keyCode === 13) {
      const weatherData = await getWeatherData(city);
      setWeather(weatherData);
    }
  };
  return (
    <div>
      <div className="main-wrapper">
        <div className="main-wrapper-mask" />
        <div className="main-wrapper-blur" />
        <div className="main-wrapper-front">
          <div className="full-center">
            <FilterCity city={city} handleChange={handleChange} handleKeyDown={handleKeyDown} />
            <br />
            <div className="widget-block">
              <div className="img-area">
                <div className="img-area-mask" />
                <img src={paris} alt="" className="paris-sm" />
                {weather ? <GetWeather weatherData={weather} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetWeatherView;
