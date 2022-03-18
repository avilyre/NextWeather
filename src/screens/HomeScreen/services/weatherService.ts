import axios from "axios";
import { WeatherCardProps } from "../../../components/WeatherCard/interface";

import apiKeys from "../../../config/apiKeys";
import { WeekDays } from "../components/ForecastDetailsModal/interface";

export async function getWeather(city:string) {
  return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys.openWeatherApi}`);
}

export async function getForecast(lat:string, lon:string) {
  return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKeys.openWeatherApi}&units=metric`);
}

export async function getForecastData(city:string) {
  const weather = await getWeather(city);
  const { lat, lon } = weather.data.coord;

  const forecast = await getForecast(lat, lon);
  console.log(JSON.stringify(forecast.data.list));

  const list: WeatherCardProps[] = forecast.data.list.map((item, index) => {
    return {
      title: WeekDays[index],
      temperature: {
        highlight: `${item.main.temp}°`,
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
