const searchEl = document.querySelector("#search-element"); // create search element in HTML (this will be the searh bar)
const searchButton = document.querySelector("#button");
const apiKey = "345a66e037b6eb708c3de1f64cd8bc35";
var lat = "36.1627";
var long = "86.7816";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
//const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?q=";
// why daily not working??

// single day city search Weather
function citySearch(event) {
  event.preventDefault();
  var cityName = searchEl.value; // text-content

  var searchUrl = baseUrl + cityName + "&appid=" + apiKey + "&units=imperial";
  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const div = document.createElement("div");

      div.innerHTML = `
      <div class="card" style="width: 18rem">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" class="card-img-top" alt="" />
          <h2 class="card-city">${data.name}</h2>
          <h5 class="card-day"></h5>
          <p class="card-text"> Temp: ${data.main.temp} Wind: ${data.wind.speed} Humidity:${data.main.humidity} </p>
          <a href="#" class="btn btn-primary"id="forecast-button">See 5 day Forcast?</a>
        </div>
      </div>
      `.trim();

      document.getElementById("weather-cards").appendChild(div.firstChild);
      // creat event listener alongstide card (to prevent problems of attempts to call before button is added to DOM)
      const forecastButton = document.getElementById("forecast-button");
      forecastButton.addEventListener("click", forecast);
    });
} /// replace (appendChild) with replace or innerHTML to prevent duplication

searchButton.addEventListener("click", citySearch);

// 5 day forecast
function forecast(event) {
  event.preventDefault();
  var cityName = searchEl.value; // text-content
  var searchUrl =
    forecastUrl + cityName + "&appid=" + apiKey + "&units=imperial";
  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      const fiveDay = data.list.filter(
        (item) => item.dt_txt.split(" ")[1] === "12:00:00"
      );
      // split at space (time and date), this creates an array, select 2nd position in arry [1], if equal use this data
      fiveDay.forEach((data) => {
        const div = document.createElement("div");
        const date = dayjs(data.dt_txt).format("dddd");
        console.log(fiveDay);

        div.innerHTML = `
      <div class="card" style="width: 18rem">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" class="card-img-top" alt="" />
          <h2 class="card-day">${date}</h2>
          <p class="card-text"> Temp: ${data.main.temp} Wind: ${data.wind.speed} Humidity:${data.main.humidity} </p>
        </div>
      </div>
      `.trim();

        document.getElementById("weather-cards").appendChild(div.firstChild);
      });
    });

  console.log("Button clicked! Show 5-day forecast.");
}

////////////////////////////////////////////////////////////////////////////

// var api = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
// var drinkName = data.drinks[0].strDrink;
// var display = document.createElement("h1");
// display.textContent = drinkName;
// document.querySelector("#new").appendChild(display);
