const API_KEY = "2824879399e7b1c2cfb7d49b90791567";
let url = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            console.log(weather);
            console.log(city);
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;

    });

}

function onGeoError() {
    alert("Can't find your location. No weather for you 눈_눈.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);