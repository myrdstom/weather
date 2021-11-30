import React from "react";
import axios from "axios";
import { render, cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import GetWeatherView from "../../../components/weather";
import { city, weatherData } from "../../__fixtures__/weatherData";

describe("Get Weather", () => {
  afterEach(cleanup);
  test("It should test the lifecycle for getting the weather data for a city", async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: weatherData }));
    const { getByLabelText, queryByText } = render(<GetWeatherView />);

    const input = getByLabelText("city-input");

    fireEvent.change(input, { target: { value: city } });
    input.focus();
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    });
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toBeTruthy();
    });
    expect(queryByText(/London/i)).toBeInTheDocument();
  });
});
