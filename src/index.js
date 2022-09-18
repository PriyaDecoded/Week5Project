import "./styles.css";

let currentTime = new Date();
let m = currentTime.getMinutes();
if (m < 10) {
  m = `0${m}`;
}
let h = currentTime.getHours();
if (h < 10) {
  h = `0${h}`;
}
let d = currentTime.getDay();
let s = currentTime.getSeconds();
let today = currentTime.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.address;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.currentConditions.feelslike
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "DHQX5SS2M9NKBSND8G9HELMWF";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;
  axios.get(apiUrl).then(displayWeather);
}

let dateElement = document.querySelector("#currentDate");
dateElement.innerHTML = `${days[today]} ${h}:${m}`;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
