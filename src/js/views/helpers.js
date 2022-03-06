import { async } from 'regenerator-runtime';
import * as config from './config.js';
import * as model from '../model.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSONWeatherByCoords = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(config.TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
    // console.log(data);
  } catch (err) {
    throw err;
  }
};

export const getJSONLocationByCoords = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(config.TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
    // console.log(data);
  } catch (err) {
    throw err;
  }
};

export const getJSONCoordsFromQuery = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(config.TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
    // console.log(data);
  } catch (err) {
    throw err;
  }
};

export const getDeviceLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoordsFromApi);
  } else {
    alert('Acces to device location not allowed!');
  }
};

const getCoordsFromApi = function (position) {
  model.state.latitude = position.coords.latitude;
  model.state.longitude = position.coords.longitude;
  console.log(model.state);
};
