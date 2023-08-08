var searchEl = document.querySelector("#search-element")   // create search element in HTML (this will be the searh bar)
var apiKey = "345a66e037b6eb708c3de1f64cd8bc35";
var lat = "36.1627";
var long = "86.7816";
var api =
  "https://api.openweathermap.org/data/2.5/forecast?lat=" +
  lat +
  "&lon=" +
  long +
  "&appid=" +
  apiKey;


// var api = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function citySearch(){
  var cityName = searchEl.value     // text-content
  var stateCode =
var apiGeo =
  "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},&limit={limit}&appid=" +
  apiKey;

}

fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // var drinkName = data.drinks[0].strDrink;
    // var display = document.createElement("h1");
    // display.textContent = drinkName;
    // document.querySelector("#new").appendChild(display);
  });


//   var countryCode=
// var apiGeo =
//   "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=" +
//   apiKey;