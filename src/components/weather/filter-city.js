import React from "react";

const FilterCity = ({ city, handleChange, handleKeyPress }) => (
  <div>
    <div id="myForm">
      <div className="form-group">
        <label data-testid="weather-title" htmlFor="username">
          View your City Weather
        </label>
        <input
          type="text"
          aria-label="city-input"
          className="form-control profile__input"
          placeholder="Enter City...."
          name="city"
          value={city}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          id="username"
          required
        />
      </div>
    </div>
  </div>
);

export default FilterCity;
