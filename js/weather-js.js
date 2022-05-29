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

    ////set to 12 hr using modulus-also allowed zero in the minutes//
    const hoursIn12hrFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes() < 10 ? '0' : '' + time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    //---------concatenate our data adn return to HTML----//
    timeEl.innerHTML = hoursIn12hrFormat + ':' + minutes + `  <span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
}, 1000);

//call geolocation based on Nav, may change this to map location on final version//
getWeatherData();

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

//---- variable for longitude and latitude coordinates from navigator call//
        let {latitude, longitude} = success.coords;


        ///API CALL using fetch and promise---- USED 2.5 version 3.0 didn't work---also changed kelvin to imperial//
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${OPEN_WEATHER_KEY}`).then(res => res.json()).then(data => {

            console.log(data);
            showWeatherData(data);
        })
    })
}

function showWeatherData(data) {
    let {feels_like, humidity, sunrise, sunset, uvi} = data.current;

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
                    <!--Needed to use the .moment cdn in my header to get the datetimegroup correct *1000 for time zone.--->
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

    let otherDayForecast = ''

    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <div class="temp">Day - ${day.temp.day}&#176; F</div>
                <div class="temp">Night - ${day.temp.night}&#176; F</div>
            </div>`
        } else {
            otherDayForecast += `
             <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Day - ${day.temp.day}&#176; F</div>
                <div class="temp">Night - ${day.temp.night}&#176; F</div>
            </div> `
        }
    })

    weatherForecastEl.innerHTML = otherDayForecast;

    mapboxgl.accessToken = MAPBOX_API_KEY;
    const MAP = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4691, 29.603415], // starting position [lng, lat]
        zoom: 10
        // starting zoom
    });
    

    const MARKER = new mapboxgl.Marker()
        .setLngLat([-98.4691, 29.603415])
        .setDraggable(true)
        .addTo(MAP);

    reverseGeocode({lat: -98.4691, lng: 29.603415}, MAPBOX_API_KEY).then(function (location) {
        console.log(location);
    });

    let LONG_LAT = [];

    MARKER.on("dragend", function () {
        LONG_LAT = MARKER.getLngLat();
        document.getElementById("place").innerHTML = LONG_LAT.lng + ", " + LONG_LAT.lat;
        MAP.flyTo({center: [LONG_LAT.lng, LONG_LAT.lat]});
        reverseGeocode(LONG_LAT, MAPBOX_API_KEY).then(function (data) {
            document.getElementById("place").innerHTML = data;
        });
    });
}





















