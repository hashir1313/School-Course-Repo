const cityInput = document.querySelector('.city')
const searchBtn = document.querySelector('.search')

const cityName = document.querySelector('.city-name') 
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

const apiKey = '06b8842370091fb7e9dc7670d1531961'

searchBtn.addEventListener('click', () => {
    if(cityInput.value != '') {
        // alert("Your City is:" +cityInput.value)
        // cityInput.value = ''
        updateWeatherInfo(cityInput.value)
    }
    else{
        alert('Please enter a city name')
        return
    }
})

cityInput.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        if(cityInput.value != '') {
            // alert(cityInput.value)
            // cityInput.value = ''
            updateWeatherInfo(cityInput.value)
        }
        else{
            alert('Please enter a city name')
            return
        }
    }
})

async function getFetchData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    const response = await fetch(apiUrl)
    return response.json()
}

async function updateWeatherInfo(city){
    const weatherData = await getFetchData(city)
    if (weatherData.cod != 200){
        alert("City not found!")
    }
    else if (weatherData.cod == 200){
        console.log(weatherData.name)
        cityName.innerText = weatherData.name
        temp.innerText = weatherData.main.temp + '°C'
        humidity.innerText = weatherData.main.humidity + '%'
        wind.innerText = weatherData.wind.speed + 'km/s'
    }
    else{
        alert("Something went wrong, try again later!")
    }
}