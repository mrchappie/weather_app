import view from '../view.js';

class sevenDaysView {
  _parentElement = document.querySelector('.info-container');

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup(weather) {
    this._clear();
    const markup = `
            <div class="humidity box">
              <div class="description"></div>
              <span class="value">${weather.currentWeather.humidity}</span>
            </div>
            <div class="clouds box">
              <div class="description"></div>
              <span class="value">${weather.currentWeather.clouds}</span>
            </div>
            <div class="pressure box">
              <div class="description"></div>
              <span class="value">${weather.currentWeather.pressure}</span>
            </div>
            <div class="wind box">
              <div class="description"></div>
              <span class="value">${weather.currentWeather.wind}</span>
            </div>
            <div class="visibility box">
              <div class="description"></div>
              <span class="value">${weather.currentWeather.visibility}</span>
            </div>
    `;
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}

export default new sevenDaysView();
