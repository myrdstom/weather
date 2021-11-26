import axios from "axios";
import { city, weatherData, rejectedValue } from "../../__fixtures__/weatherData";
import { getWeatherData } from "../../../api";

jest.mock("axios");
const mockedAxios = axios;

describe("Products Api", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("requests and gets object Ids", async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve({ data: weatherData }));

    const entity = await getWeatherData(city);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(entity).toEqual(weatherData);
  });

  it("requests fails to get the Ids", async () => {
    mockedAxios.get.mockRejectedValue(rejectedValue);

    const entity = await getWeatherData(city);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(entity).toEqual(rejectedValue);
  });
});
