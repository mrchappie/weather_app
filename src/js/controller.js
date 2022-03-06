import * as model from '../js/model.js';
import * as helpers from '../js/views/helpers.js';
import searchView from '../js/views/searchView';
import currentWeather from './views/currentWeather.js';
import sevenDays from './views/sevenDays.js';
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

const renderView = function (data) {
  currentWeather._generateMarkup(data);
  sevenDays._generateMarkup(data);
};

const init = function () {
  searchView.addHandlerSearch(searchForWeather);
  helpers.getDeviceLocation();

  setTimeout(() => {
    model.getLocationByCoords();
    model.getWeather();
    setTimeout(() => renderView(model.state), 500);
  }, 1000);
};

init();
