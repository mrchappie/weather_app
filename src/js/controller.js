import * as model from '../js/model.js';
import * as helpers from '../js/views/helpers.js';
import searchView from '../js/views/searchView';
import currentWeather from './views/currentWeather.js';
import weatherInfo from './views/weatherInfo.js';
import * as config from '../js/views/config.js';

const searchForWeather = function () {
  // clearStateObject();
  const query = searchView.getQuery();
  console.log(query);
  getCoordsForQuery(query);
  setTimeout(() => renderView(model.state), 500);
};

const getCoordsForQuery = function (query) {
  model.getCoords(query);
};

const clearStateObject = function () {
  model.state = {
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
};

const hideMessage = function () {
  const message = document.querySelector('.no-location-message');

  setTimeout(() => (message.style.display = 'none'), 3000);
};

const renderView = function (data) {
  currentWeather._generateMarkup(data);
  weatherInfo._generateMarkup(data);
};

const init = function () {
  searchView.addHandlerSearch(searchForWeather);
  helpers.getDeviceLocation();

  window.addEventListener('load', hideMessage);

  setTimeout(() => {
    model.getLocationByCoords();
    model.getWeather();
    setTimeout(() => renderView(model.state), 500);
  }, 1000);
};

init();
