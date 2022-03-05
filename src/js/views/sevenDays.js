import view from '../js/view.js';

class sevenDaysView extends view {
  _parentElement = document.querySelector('.multiple-days-weather');

  _generateMarkup(weather) {
    const markup = `
        <div class="day-box">
          <div class="day">${Monday}</div>
                <div class="weather-icon" style="background-image: url(${'http://i54.tinypic.com/4zuxif.jpg'})"></div>
          <div class="day-temperature">${13}<span>°</span></div>
        </div>
        <div class="day-box">
          <div class="day">${Monday}</div>
                <div class="weather-icon" style="background-image: url(${'http://i54.tinypic.com/4zuxif.jpg'})"></div>
          <div class="day-temperature">${13}<span>°</span></div>
        </div>
        <div class="day-box">
          <div class="day">${Monday}</div>
                <div class="weather-icon" style="background-image: url(${'http://i54.tinypic.com/4zuxif.jpg'})"></div>
          <div class="day-temperature">${13}<span>°</span></div>
        </div>
        <div class="day-box">
          <div class="day">${Monday}</div>
                <div class="weather-icon" style="background-image: url(${'http://i54.tinypic.com/4zuxif.jpg'})"></div>
          <div class="day-temperature">${13}<span>°</span></div>
        </div>
        <div class="day-box">
                <div class="day">${Monday}</div>
          <div class="weather-icon" style="background-image: url(${'http://i54.tinypic.com/4zuxif.jpg'})"></div>
          <div class="day-temperature">${13}<span>°</span></div>
        </div>
        <div class="day-box">
          <div class="day">${Monday}</div>
                <div class="weather-icon" style="background-image: url(${'http://i54.tinypic.com/4zuxif.jpg'})"></div>
          <div class="day-temperature">${13}<span>°</span></div>
        </div>
        <div class="day-box">
          <div class="day">${Monday}</div>
                <div class="weather-icon" style="background-image: url(${'http://i54.tinypic.com/4zuxif.jpg'})"></div>
          <div class="day-temperature">${13}<span>°</span></div>
        </div>
    `;
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}

export default new sevenDaysView();
