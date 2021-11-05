//link js file to html
//get access to the input field
//get access to button 

//create function to fetch api data when function is clicked

//grab all 4 HTML elements
//Global Variable for weather data
//New function to display data into 4 HTML elements
//Convert temp to F/C

var apiKey = "a383c6cca0609eb03c480e6e639c0a3f"
var inputField = document.querySelector('#city')
var button = document.querySelector('#get-weather')
 var tempEl = document.querySelector("#temp")
 var cityEl = document.querySelector("#city-name")
 var pressureEl = document.querySelector("#pressure")
 var descriptionEl = document.querySelector("#description")
function fetchData(){
  var cityName = inputField.value
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
  
  fetch(requestUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(weatherData) {
      console.log(weatherData)

      var highTemp = weatherData.main.temp_max
      highTemp = highTemp -273.15
      var lowTemp = weatherData.main.temp_min
      lowTemp = lowTemp - 273.15

      tempEl.textContent = "Highs of " +highTemp + "and lows of " + "."
      cityEl.textContent = weatherData.name 
      pressureEl.textContent = " Pressure of: " + weatherData.main.pressure + " pascals"
      descriptionEl.textContent = weatherData.weather[0].description
    })
    inputField.value = "";
}
function displayTemp(){

}

button.addEventListener('click', fetchData)

// fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (weatherData) {
//             console.log(weatherData);

//             // Retrieving and converting temps
//             var highTemp = weatherData.main.temp_max;
//             highTemp = highTemp -273.15;
//             var lowTemp = weatherData.main.temp_min;
//             lowTemp = lowTemp -273.15;


//             // Text content
//             tempEl.textContent = "Highs of " + highTemp + " and lows of " + lowTemp + ".";
//             cityEl.textContent = weatherData.name;
//             pressureEl.textContent = "Extremely high pressure of: " + weatherData.main.pressure;
//             descriptionEl.textContent = weatherData.weather[0].description;
            
//         });

