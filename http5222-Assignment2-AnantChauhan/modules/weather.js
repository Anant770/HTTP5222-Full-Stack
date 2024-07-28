// const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();
const apiKey = process.env.WEATHER_API_KEY;

const getWeather = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
};

module.exports = { getWeather };