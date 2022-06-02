"use strict";

const weatherForecastEl = $('weather-forecast');

let day = ""  //acting bucket
for (let i =0; i <=4; i++) {
    day += `
        <div class='dow'>
            <Div>${data.daily[i].temp.max}˚F / ${data.daily[i].temp.min}˚F </Div>
            <div>Humidity: ${data.daily[i].humidity}%</div>
            <div>Wind: ${data.daily[i].wind_speed} mph</div>
            <div>Rain: ${data.daily[i].rain * 100}%</div>
        </div>`


//--------INITIAL MAP API CALL TO MAPBOX & CANTER POINT----//

    mapboxgl.accessToken = MAPBOX_API_KEY;
    const MAP = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
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

//-----SETS GEO LOCATOR FOR THE SEARCH BOX----Form MAPBOX EXAMPLE-//
    const geocoder = new MapboxGeocoder({
        accessToken: MAPBOX_API_KEY,
        mapboxgl: mapboxgl
    });

    MAP.addControl(geocoder)

//-----USES SEARCH FIELD RESULTS TO RECENTER LOCATION & GATHERS RESULT/DATA---Dalton HELP!-//
    geocoder.on('result', function (data) {
        getWeatherData(data.result.center[1], data.result.center[0])
    });
}

