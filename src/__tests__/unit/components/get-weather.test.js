import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import GetWeatherView from "../../../components/weather";
import { city } from "../../__fixtures__/weatherData";

describe("Get Weather", () => {
  afterEach(cleanup);
  test("It should test the lifecycle for getting the weather data for a city", async () => {
    const { getByLabelText } = render(<GetWeatherView />);

    const input = getByLabelText("city-input");

    fireEvent.change(input, { target: { value: city } });
    fireEvent.keyPress(input, { key: "Enter", charCode: 13 });
  });
});
