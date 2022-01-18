function fetchData() {
    let cityName = place.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9b150e50a474d35fe8ee8c068c745b33&units=metric`).
        then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("not found")
            }
        }).then(data => displayValues(data)).catch(err => alert(err)

        )
}
function displayValues(data) {
    
    let temperature = data.main.temp
    let locationName = data.name
    let minTemp = data.main.temp_min
    let maxTemp = data.main.temp_max
    let typeWeather = data.weather[0].main
    let windSpeed = data.wind.speed

    let htmldata = `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${locationName}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temperature =  ${temperature}</li>
    <li class="list-group-item">Minimum Temp =  ${minTemp}</li>
    <li class="list-group-item">Maximum Temp = ${maxTemp}</li>
    <li class="list-group-item">Type Weather = ${typeWeather}</li>
    <li class="list-group-item">Wind Speed = ${windSpeed}</li>
  </ul>
</div>
    `

    document.querySelector("#result").innerHTML = htmldata
}

