import axios from "axios";
import { WeatherCardProps } from "../components/WeatherCard/interface";

import apiKeys from "../config/apiKeys";
import { WeekDays } from "../screens/ForecastDetails/interface";

export async function getWeather(city:string) {
  return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys.openWeatherApi}&units=metric&lang=pt_br`);
}

export async function getForecast(lat:string, lon:string) {
  return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKeys.openWeatherApi}&units=metric&lang=pt_b`);
}

export async function getForecastData(city:string) {
  const weather = await getWeather(city);
  const { lat, lon } = weather.data.coord;

  const forecast = await getForecast(lat, lon);

  const list: WeatherCardProps[] = forecast.data.list.map((item, index) => {
    return {
      title: WeekDays[index],
      highlight: `${item.main.temp}°`,
      temperature: {
        details: {
          weather: item.weather.description,
          min: `${item.main.temp_min}°`,
          max: `${item.main.temp_max}°`
        }
      }
    };
  });
  return list;
}
