var APIKey = "21608b13cfc9360b12231cf7c4d067a6"
var searchBtn = $('#searchBtn')
var input = $('#input')
var currentTempEl = document.getElementById('temperature')
var currentWindSpeedEl = document.getElementById('wind')
var currentHumidityEl = document.getElementById('humidity')
var fivedayForecast = document.getElementById('forecast')
// var date = document.getElementById('date')
// var forecastTempEl = document.getElementById('temperature1')
// var forecastWindspeedEl = document.getElementById('wind1')
// var forecastHumidityEl = document.getElementById('humidity1')

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
          currentTempEl.textContent = "Current tempature in " + input + " is " + temperature + " °F"
          currentWindSpeedEl.textContent = "Current wind speed in " + input + " is " + wind + " MPH"
          currentHumidityEl.textContent = "Current humidity in " + input + " is " + humidity + " %"
        })
}

function renderForecast(input) {
  //fetch a city's five day forecast by searching it
  var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + APIKey + "&units=imperial"
  fetch (forecastUrl)
      .then(function(response) {
        return response.json()
      })
      .then(function(data2){
        console.log(data2)
    for (var i = 3; i < data2.list.length; i+=9){
            var forecast1 = document.createElement('div');
            var date = document.createElement('p')
            var temperature = document.createElement('p')
            var wind = document.createElement('p')
            var humidity = document.createElement('p')

            date.textContent = "Weather in " + input + " on " + moment.unix(data2.list[i].dt).format("MM-DD-YYYY")
            temperature.textContent = "Temp: " + data2.list[i].main.temp + " °F"
            wind.textContent = "Wind: " + data2.list[i].wind.speed + " MPH"
            humidity.textContent = "Humidity: " + data2.list[i].main.humidity + " %"

            fivedayForecast.append(forecast1);
            forecast1.append(date);
            forecast1.append(temperature);
            forecast1.append(wind);
            forecast1.append(humidity);
    }
})
}