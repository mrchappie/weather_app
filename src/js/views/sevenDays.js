import view from '../view.js';

class sevenDaysView {
  _parentElement = document.querySelector('.multiple-days-weather');

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup(weather) {
    this._clear();
    const markup = `
    <div class="other-weather-info">
              <div class="humidity box">Humidity: ${weather.currentWeather.humidity}</div>
          <div class="clouds box">Clouds: ${weather.currentWeather.clouds}</div>
              <div class="pressure box">Pressure: ${weather.currentWeather.pressure}</div>
          <div class="wind box">Wind: ${weather.currentWeather.wind} km/h</div>
              <div class="visibility box">Visibility: ${weather.currentWeather.visibility}</div>
    </div>
    `;
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}

export default new sevenDaysView();
