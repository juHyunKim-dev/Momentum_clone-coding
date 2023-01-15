const API_KEY = "b4d872357e3fa8cfcb0dd86b0aa510ac";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url) // JS가 url을 부름
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      temperature.innerText = `${data.main.temp}℃`;
      weather.innerText = `${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// user의 위치 알아내는 코드
