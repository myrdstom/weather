import React from "react";

const GetWeather = ({ weatherData }) => {
  const weatherUrl = process.env.REACT_APP_WEATHER_ICON_URL;
  const {
    name,
    weather,
    main: { temp_max, temp_min, temp }
  } = weatherData;
  const { icon } = weather[0];
  const imgSrc = `${weatherUrl}${icon}.png`;
  return (
    <div>
      <h1>{name}</h1>
      <div className="temp">{Math.round(temp - 273.15)}&deg;C</div>
      <div className="icon">
        <img src={imgSrc} alt="Another alternate" />
      </div>
      <div>
        <span>{Math.round(temp_max - 273.15)}&deg;C</span>
        &nbsp; &nbsp; &nbsp;
        <span>{Math.round(temp_min - 273.15)}&deg;C</span>
      </div>
    </div>
  );
};

export default GetWeather;
