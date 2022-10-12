var APIKey = "21608b13cfc9360b12231cf7c4d067a6"
var searchBtn = $('#searchBtn')
var input = $('#input')
var currentTempEl = document.getElementById('temperature')
var currentWindSpeedEl = document.getElementById('wind')
var currentHumidityEl = document.getElementById('humidity')

function search(){
  //adds functionality to the search button, runs the functions created when search is clicked
    var inputValue = input.val()
    console.log(inputValue)
    renderWeather(inputValue)
    renderForecast(inputValue)
}

searchBtn.on('click', search)

function renderWeather(input) {
    // fetch a city's current weather by searching it
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + input + "&appid=" + APIKey + "&units=imperial"
    fetch (url)
      .then(function(response) {
        return response.json()
      })
      .then(function(data){
        console.log(data)
        var temperature = data.main.temp
        var wind = data.wind.speed
        var humidity = data.main.humidity
          currentTempEl.textContent = "Tempature in " + input + " is " + temperature + " °F"
          currentWindSpeedEl.textContent = "Wind speed in " + input + " is " + wind + " MPH"
          currentHumidityEl.textContent = "Humidity in " + input + " is " + humidity + " %"
        })
}

function renderForecast(input) {
  //fetch a city's five day forecast by searching it
  var forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + APIKey + "&units=imperial"
  fetch (forcastUrl)
      .then(function(response) {
        return response.json()
      })
      .then(function(data2){
        console.log(data2)
})
}