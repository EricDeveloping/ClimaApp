
const input = document.getElementById('input');
const form = document.getElementById('form');
const API_KEY = '78a3e8b00557670d15febe7b59efbdc1';


function cityWeather(){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const city = input.value;
        if(city){
            fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => giveWeather(data))
        }
    })
}

function giveWeather(data){
    console.log(data)
    const weatherObj = {
        temperature: Math.floor(data.main.temp),
        thermal_sensation: Math.floor(data.main.feels_like),//operacion manual: formula de Siple
        humidity: data.main.humidity,
        pressure: data.main.pressure,
    }
    // document.innerHTML = `<img src="icons/${weather[0].id}.png`
    Object.keys(weatherObj).forEach(key => {
        document.getElementById(key).innerHTML = weatherObj[key]; //el mismo iterador busca los id's que tienen el mismo nombre que el de los objetos
    })
}

cityWeather();



// const fetchCalling = position => {
//     const {latitude, longitude} = position.coords;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name},uk&appid=${API_KEY}`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         console.log(data)
// }






    // let url = 'https://pokeapi.co/api/v2/pokemon/1/';
    // try {
    //     const respuesta = await fetch(url);
    //     const otraRespuesta = await respuesta.json()
    //     console.log(otraRespuesta)
    // } catch (error) {
    //     console.log(error)
    // }


// const log = position => {
//     console.log(position);
// }
// const userPosition = () => { //arrow que permite pedir la localización al usuario y mandarla al log
//     navigator.geolocation.getCurrentPosition(log)
// }

