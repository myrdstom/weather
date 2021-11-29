import React from "react";

const GetWeather = ({ weatherData }) => {
  const weatherUrl = process.env.REACT_APP_WEATHER_ICON_URL;
  const {
    name,
    weather,
    main: { temp, humidity, pressure },
    wind: { speed }
  } = weatherData;
  const { icon, main } = weather[0];
  const imgSrc = `${weatherUrl}${icon}.png`;
  return (
    <div className="img-area-front">
      <h5 data-testid="city-name" className="location">
        {name}
      </h5>
      <div className="weather-desc">
        <span>{main}</span>
      </div>
      {}
      <ul className="weather-block-info">
        <li>
          <p className="temperature">{Math.round(temp - 273.15)}</p>
        </li>
        <li>
          <img className="icon" src={imgSrc} alt="" />
        </li>
        <li>
          <ul className="weather-params">
            <li>
              <i className="climacon thermometer medium-high" /> <span>{pressure} mm Hg</span>
            </li>
            <li>
              <i className="climacon moon full" /> <span>{humidity}% humidity</span>
            </li>
            <li>
              <i className="climacon wind" /> <span>{speed}m/s NW</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default GetWeather;
