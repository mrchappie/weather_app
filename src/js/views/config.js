export const TIMEOUT_SEC = 5;
export const API_KEY = '36b98488c8403d497a9d6675664f1855';
export const GEOCODING_API = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`;

// q	required	City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.

// appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)

// limit	optional	Number of the locations in the API response (up to 5 results can be returned in the API response)

export const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

// Parameters
// lat, lon	required	Geographical coordinates (latitude, longitude)

// appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)

// exclude	optional	By using this parameter you can exclude some parts of the weather data from the API response. It should be a comma-delimited list (without spaces).

// Available values:

// current
// minutely
// hourly
// daily
// alerts

// units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.
// lang	optional	You can use the lang parameter to get the output in your language.
