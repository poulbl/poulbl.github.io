// do stuff

const apiKey = '664686f91d617844df6826c9074a9884'
var city = 'viborg';
var url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


//var promise = fetch(url)
//            .then(data => data.text())
//            .then(data => console.log(data))


//const textArea = document.createElement('textarea')
//textArea.textContent = 'Skriv by her'
const textArea = document.getElementById('cityInput')
const textLong = document.getElementById('longInput')
const textLat = document.getElementById('latInput')

//const btn = document.createElement('button')
//const citybtn = document.getElementById('cityBtn')
//const geobtn = document.getElementById('geoBtn')

//document.body.appendChild(textArea)
//document.body.appendChild(btn)
//https://www.youtube.com/watch?v=p0bGHP-PXD4


// Nye form felter
const nowCity = document.getElementById('NowCityInput')
const nowLat = document.getElementById('NowLatInput')
const nowLong = document.getElementById('NowLongInput')

const foreCity = document.getElementById('ForeCastCityInput')
const foreLat = document.getElementById('ForeCastLatInput')
const foreLong = document.getElementById('ForeCastLongInput')

const weatherbtn = document.getElementById('WeatherConfirm')
const forecastbtn = document.getElementById('ForecastConfirm')

const nowForm = document.getElementById('nowForm')
const forecastForm = document.getElementById('forecastForm')

const NewTextArea = document.getElementById('datasection')
NewTextArea.hidden = true

nowForm.addEventListener('submit', WeatherNow)
forecastForm.addEventListener('submit', WeatherForecast)

const newText = (content) => {

    NewTextArea.hidden = false
    const textBox = document.createElement('textarea')
    textBox.textContent = content

    document.getElementById('NewTextArea').appendChild(textBox)

    document.getElementById('temp').InnerHTML = `Temperaturerrsda: ${content.main.temp}`;
    //document.body.NewTextArea.appendChild(textBox)
}

const populateData = (data, searchType) => {
    //alert(data.main.temp)
    NewTextArea.hidden = false
    if(searchType === 'city')
    {
        document.getElementById('headline').textContent = `Data for ${searchType} ${data.name}:`
    }
    else if (searchType === 'geo')
    {
        document.getElementById('headline').textContent = `Data for location ${data.coord.lat} latitude and ${data.coord.lon} longitude`
    }
    else {
        document.getElementById('headline').textContent = `Search failed.`
        document.getElementById('temp').textContent = `Temperature (Kelvin): No Data`
        document.getElementById('feels_like').textContent = `Feels Like (Kelvin): No Data`
        document.getElementById('windspeed').textContent = `Wind Speed: No Data`
        document.getElementById('clouds').textContent = `Clouds: No Data`
    }
        
    document.getElementById('temp').textContent = `Temperature (Kelvin): ${data.main.temp}`
    document.getElementById('feels_like').textContent = `Feels Like: (Kelvin) ${data.main.feels_like}`
    document.getElementById('windspeed').textContent = `Wind Speed: ${data.wind.speed} m/s`
    document.getElementById('clouds').textContent = `Clouds: ${data.clouds.all}`
}

/*
* API Calls
*/


async function WeatherNow(event)
{
    event.preventDefault()
    var city = document.getElementById('NowCityInput').value

    var searchType
    var result = 'No data found :('
    
    if(nowCity.value !== '')
    {
        searchType = 'city'
        result = await fetch(url(city))
                        .then(response => response.json())
    }
    else if(nowLat.value !== '' && nowLong.value !== '') {
        searchType = 'geo'
        result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${nowLat.value}&lon=${nowLong.value}&appid=${apiKey}`)
                          .then(response => response.json())
    }
    else {
       result = 'No data found :( - Try something else' 
    }

    populateData(result, searchType)
    //newText(result)

    return false;
}


async function WeatherForecast(event)
{
    event.preventDefault()
    var city = document.getElementById('ForeCastCityInput').value

    var searchType
    var result = 'No data found :('
    
    if(nowCity.value !== '')
    {
        searchType = 'city'
        // TODO
        result = await fetch(url(city))
                        .then(response => response.json())
    }
    else if(nowLat.value !== '' && nowLong.value !== '') {
        searchType = 'geo'
        // TODO
        result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${foreLat.value}&lon=${foreLong.value}&appid=${apiKey}`)
                          .then(response => response.json())
    }
    else {
       result = 'No data found :( - Try something else' 
    }

    populateData(result, searchType)
    //newText(result)

    return false;
}


async function GetWeatherData(city) {
    alert(city)
    var result = await fetch(url(city))
                .then(data => data.text())

    return result
}

async function GetWeatherDataGeo(long, lat)
{
    alert(`${long} - ${lat}`)
    var result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
                      .then(data=>data.text())

    return result
}


/* Interessante api kald.
*   Air Pollution
*   Road Risk
*   "One Call API"
*   Statistical Weather Data
*   History Bulk (40 år tilbage lul)
*
*   Kunne evt lave så man kan skrive 2 positioner og finde ud af hvordan vejret er på turen.
*/
