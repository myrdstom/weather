import React from "react";
import "./filterCity.css";

const FilterCity = ({ city, handleChange, handleKeyDown }) => (
  <div>
    <div id="myForm">
      <div className="form-group">
        <input
          type="text"
          aria-label="city-input"
          className="form-control profile__input"
          placeholder="Enter City...."
          name="city"
          value={city}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="city"
          required
        />
      </div>
    </div>
  </div>
);

export default FilterCity;
