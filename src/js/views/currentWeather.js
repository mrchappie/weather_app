import view from '../js/view.js';

class currentWeatherView extends view {
  _parentElement = document.querySelector('.current-weather');

  _generateMarkup(weather) {
    const markup = `
            <div class="current-weather">
                <div class="logo">made by chappie</div>
                    <div class="date">
                        <div class="current-day">${Friday}</div>
                    <div class="current-date">${August}, ${28}</div>
                </div>
                <div class="temp-loc">
                    <div class="current-temperature">${12}<span>°</span></div>
                    <div class="current-location">${Bucharest}, ${Romania}</div>
                </div>
            </div>
    `;
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}

export default new currentWeatherView();
