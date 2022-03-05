import { async } from 'regenerator-runtime';
import { getJSONWeatherByCoords } from '../js/views/helpers.js';
import { getJSONCoordsFromQuery } from '../js/views/helpers.js';
import { API_KEY } from '../js/views/config.js';

export const state = {
  latitude: [],
  longitude: [],
  cityName: [],
  country: [],
  date: {
    day: [],
    month: [],
    dayName: [],
  },
  citiesIdea: [],
  weatherByDay: {
    days: [],
  },
  currentWeather: [],
};

const constructCurrentWeatherObj = function (data) {
  const weather = data.current;
  return {
    clouds: weather.clouds,
    temp: weather.temp,
    tempLike: weather.feels_like,
    humidity: weather.humidity,
    pressure: weather.pressure,
    description: weather.weather[0].description,
    weatherIcon: weather.weather[0].icon,
    weatherId: weather.weather[0].id,
    skyType: weather.weather[0].main,
  };
};

const constructCurrentWeatherObj1 = function (data) {
  const weather = data;
  return {
    clouds: weather.clouds,
    temp: weather.temp,
    tempLike: weather.feels_like,
    humidity: weather.humidity,
    pressure: weather.pressure,
    description: weather.weather[0].description,
    weatherIcon: weather.weather[0].icon,
    weatherId: weather.weather[0].id,
    skyType: weather.weather[0].main,
    dayTime: weather.dt,
  };
};

export const getCoords = async function (query) {
  try {
    state.cityName = query;

    const data = await getJSONCoordsFromQuery(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${1}&units=metric&appid=${API_KEY}`
    );

    state.latitude = data[0].lat;
    state.longitude = data[0].lon;
    state.cityName = data[0].name;
    state.country = data[0].country;

    console.log('coords');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const getWeather = async function (lat, lon) {
  try {
    // const data = await getJSONWeatherByCoords(
    //   `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    // );
    const data = await getJSONWeatherByCoords(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${'hourly'},${'minutely'}&units=metric&appid=${API_KEY}`
    );

    state.currentWeather = constructCurrentWeatherObj(data);

    state.days = data.daily.map(day => {
      return constructCurrentWeatherObj1(day);
    });

    console.log('weather');
    console.log(data);
    console.log(state.days);
  } catch (err) {
    console.log(err);
  }
};
