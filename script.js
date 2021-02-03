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
const citybtn = document.getElementById('cityBtn')
const geobtn = document.getElementById('geoBtn')

//document.body.appendChild(textArea)
//document.body.appendChild(btn)
//https://www.youtube.com/watch?v=p0bGHP-PXD4


/*
* EventListeners
*/
citybtn.addEventListener('click', async () => {
    //alert('Button clicked')
    var text = await GetWeatherData(textArea.value)
    newText(text)
})

geobtn.addEventListener('click', async () => {
    var text = await GetWeatherDataGeo(textLong.value, textLat.value)
    newText(text)
})




const newText = (content) => {

    const textBox = document.createElement('textarea')
    textBox.textContent = content

    document.body.appendChild(textBox)
}

/*
* API Calls
*/
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
