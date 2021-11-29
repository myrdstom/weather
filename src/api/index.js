import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

export const getWeatherData = async data => {
  try {
    const response = await axios.get(`${REACT_APP_BASE_URL}${data}&appid=${REACT_APP_API_KEY}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return { error: "something went wrong" };
  }
};
