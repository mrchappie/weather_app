class ContentView {
  _parentElemnt = document.querySelector('.app-container');
  _currentWeather = document.querySelector('.current-weather');
  _daysElement = document.querySelector('.multiple-days-weather');

  _generateMarkup(weather) {}

  _clear() {
    this._parentElemnt.innerHTML = '';
  }

  _render(data) {
    this._clear();
    this._generateMarkup(data);
  }
}

export default new ContentView();
