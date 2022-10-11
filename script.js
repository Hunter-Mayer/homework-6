var APIKey = "21608b13cfc9360b12231cf7c4d067a6"
var cityInput = $('#input')
var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + "&units=imperial&appid=" + APIKey


//function renderWeather(city) {
    // fetch a city's 5 day forecast by searching it
    fetch (url)
      .then(function(response) {
        return response.json()
      })
      .then(function(data){
        console.log(data)
      }) 
    //}