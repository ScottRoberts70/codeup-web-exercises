"use strict";

//---------All my reference Variables that will be used in my functions--//

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

//---------------set variables for days, and months to use in our innerHTML---//
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//------- Set interval function to set time and date info according to web browser and refresh every second. Not getting it from Openweather.------>

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();

    //formats the time for the current data---///
    const hoursIn12hrFormat = time.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})

    //---------concatenate our data adn return to HTML----//
    timeEl.innerHTML = hoursIn12hrFormat;
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
}, 1000);

getWeatherData();

function getWeatherData(latitude, longitude) {
    navigator.geolocation.getCurrentPosition((success) => {

//---- variable for longitude and latitude coordinates from navigator call//
        if (latitude === undefined || longitude === undefined) {
            latitude = success.coords.latitude
            longitude = success.coords.longitude
        }

        ///API CALL using fetch and promise---- USED 2.5 version 3.0 didn't work---also changed kelvin to imperial//
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${OPEN_WEATHER_KEY}`).then(res => res.json()).then(data => {

            showWeatherData(data);
        })
    })

}

//----THE INFO I REQUESTED FROM THE API CALL------//
function showWeatherData(data) {
    let {feels_like, humidity, sunrise, sunset, uvi} = data.current;
    console.log(data);

    //-----USED LITERALLY TO PLACE HTML IN JS AND RETURN THE DATA TO HTML FORMAT//
    currentWeatherItemsEl.innerHTML = `<div class="weather-item">
                    <div>Feels Like</div>
                    <div>${feels_like}&#176;</div>
                </div>
                <div class="weather-item">
                    <div>Humidity</div>
                    <div>${humidity}%</div>
                </div>
                <div class="weather-item">
                    <div>Sun Rise</div>
                 
                    <!--Needed to use the .moment cdn --->
                    <div>${window.moment(sunrise * 1000).format('h:mm a')}</div>
                </div>
                <div class="weather-item">
                    <div>Sun Set</div>
                    <div>${window.moment(sunset * 1000).format('h:mm a')}</div>
                </div>
                <div class="weather-item">
                    <div>UV Index</div>
                    <div>${uvi}</div>
                </div>`;

    //-----BUCKET-------//
    let otherDayForecast = ''

    data.daily.forEach((day, idx) => {
        if (idx == 0) {

            //SETS THE INFORMATION FROM THE API FOR CURRENT INFO//
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <div class="temp">High - ${day.temp.max}&#176; F</div>
                <div class="temp">Low - ${day.temp.min}&#176; F</div>
                <div class="rain">Chance of Rain ${day.rain} %</div>
            </div>`
        } else {

            //SETS THE INFORMATION FROM THE API FOR THE 7DAYS or OtherDaily//
            otherDayForecast += `
             <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">High - ${day.temp.max}&#176; F</div>
                <div class="temp">Low - ${day.temp.min}&#176; F</div>
            </div> `
        }
    })
//------PUT THE INFO ONTO THE WEBPAGE----------//
    weatherForecastEl.innerHTML = otherDayForecast;
}

//--------INITIAL MAP API CALL TO MAPBOX & CANTER POINT----//

mapboxgl.accessToken = MAPBOX_API_KEY;
const MAP = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    center: [-98.4691, 29.603415], // starting position [lng, lat]
    zoom: 13 // starting zoom
});


//----CODE COPIED FROM MAPBOX TO LET YOU CHOOSE MAP STYLES---//
const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        MAP.setStyle('mapbox://styles/mapbox/' + layerId);
    }
}

//-----SETS GEO LOCATOR FOR THE SEARCH BOX-----//
const geocoder = new MapboxGeocoder({
    accessToken: MAPBOX_API_KEY,
    mapboxgl: mapboxgl
});

MAP.addControl(geocoder)

//-----USES SEARCH FIELD RESULTS TO RECENTER LOCATION & GATHERS RESULT/DATA----//
geocoder.on('result', function (data) {
    getWeatherData(data.result.center[1], data.result.center[0])
});
























