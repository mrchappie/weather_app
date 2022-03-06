import view from '../view.js';

class currentWeatherView {
  _parentElement = document.querySelector('.current-weather');
  _d = new Date();
  _date = this._d.getDate();

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  _day = this.days[this._d.getDay()];
  _month = this.months[this._d.getMonth()];

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup(weather) {
    this._clear();
    const markup = `
                <div class="logo">made by chappie</div>
                    <div class="date">
                        <div class="current-day">${this._day}</div>
                    <div class="current-date">${this._month}, ${
      this._date
    }</div>
                </div>
                <div class="temp-loc">
                    <div class="current-temperature">${Math.round(
                      weather.currentWeather.temp
                    )}<span>°</span></div>
                    <div class="current-location">${weather.cityName}, ${
      weather.country
    }</div>
                </div>
            
    `;
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}

export default new currentWeatherView();
