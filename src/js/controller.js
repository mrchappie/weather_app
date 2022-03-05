import * as model from '../js/model.js';
import * as helpers from '../js/views/helpers';
import * as config from '../js/views/config.js';

const init = function () {
  model.getCoords('București');
  setTimeout(() => {
    model.getWeather(model.state.latitude, model.state.longitude);
  }, 1000);

  helpers.getLocation();
};

init();
