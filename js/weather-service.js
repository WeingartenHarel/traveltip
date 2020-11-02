'use strict';

import { storage } from './storage-service.js';

const STORAGE_KEY = 'weatherDB';
// var gWeather = [];
const WEATHER_KEY = 'e48b3fe16da4980e38b80f60905d8892'

// https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=e48b3fe16da4980e38b80f60905d8892

// console.log(gWeather);
// console.log(loadWeather('tel-aviv'));


function loadWeather(cityName) {

    // var weather = storage.loadFromStorage(STORAGE_KEY);
    // if (weather) {
    //     gWeather = weather;
    //     _saveToStorage();
    //     console.log('loading weather from local storage');
    //     return gWeather;
    // }
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_KEY}`)
        .then(res => {
            // gWeather = res.data;
            // _saveToStorage();
            return res.data;
        })
}



function loadCoords(lat, lon) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`)
        .then(res => {
            return res.data;
        })
}



function _saveToStorage() {
    storage.saveToStorage(STORAGE_KEY, gWeather);
}


export const weatherService = {
    loadWeather,
    loadCoords
}

// 0581774118db611eb667beb10ab2fcdd