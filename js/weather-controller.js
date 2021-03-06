'use strict';
 
import { weatherService } from './weather-service.js';
import { mapControler } from './map-controller.js';
// import { weatherService } from '/weather-service.js';
// import { mapControler } from '/map-controller.js';
// import { weatherService } from './traveltip/js/weather-service.js';
// import { mapControler } from './traveltip/js/map-controller.js';


onInit();

function onInit() {
    resizeWeather();
    onGetCity();
}



function renderWeather(res) {
    // document.querySelector('.loading').style.display = 'none';
    var elWeather = document.querySelector('.weather-container');
   //https 
    elWeather.innerHTML = `
    <div><img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png"></div>
    <h2>${res.name}, ${res.sys.country}, ${res.weather[0].description}</h2>
    <h1><span>${res.main.temp.toFixed(1)}c</span></h1>
    <p>temperature from ${res.main.temp_min} to ${res.main.temp_max}c, wind ${res.wind.speed} m/s </p> 
    `;
}

function resizeWeather(){
    if (window.innerWidth > 720 ) return
    var elWeatherContainer = document.querySelector('.map-weather')
    var elWeather =  document.querySelector('.weather-container')
    console.log(elWeatherContainer.offsetWidth)
    elWeather.style.width = elWeatherContainer.offsetWidth+'px';
    elWeather.style.height = elWeatherContainer.offsetWidth+'px';
}

function onGetCity() {
    var input = document.querySelector('.input');
    var btn = document.querySelector('.input-location button');
    btn.addEventListener('click', function () {
        var weather = weatherService.loadWeather(`${input.value}`)
        weather.then(res => {
            mapControler.showLocationFromInput(res);
            
            return renderWeather(res);
        });
    })
}


