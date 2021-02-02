// do stuff

const apiKey = '664686f91d617844df6826c9074a9884'
var city;
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


var promise = fetch(url)
            .then(data => data.text())
            .then(data => console.log(data))


const btn = document.createElement('button')
btn.innerText = 'New Button'

btn.addEventListener('click', () => {
    alert('Button clicked')
})


document.body.appendChild(btn)

/* Interessante api kald.
*   Air Pollution
*   Road Risk
*   "One Call API"
*   Statistical Weather Data
*   History Bulk (40 år tilbage lul)
*
*   Kunne evt lave så man kan skrive 2 positioner og finde ud af hvordan vejret er på turen.
*/
