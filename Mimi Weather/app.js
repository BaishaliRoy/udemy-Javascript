const inputCity = document.querySelector('.city');
const myCity = document.querySelector('.my-city');
const myWeather = document.querySelector('.my-weather');
const myTemp = document.querySelector('.my-temp');

const getDetails = async  (city) =>{

    const cityKeyDetails = await getCity(city);
    const weatherDetails = await getWeather(cityKeyDetails);

    return {
        weather : weatherDetails
    }
}

inputCity.addEventListener('submit', e =>{
    e.preventDefault();
    const city = e.target.firstElementChild.value.trim();
    inputCity.reset();
    getDetails(city)
    .then(data =>{
        
        myCity.innerText = city;
        myWeather.innerText = data.weather.WeatherText;
        myTemp.innerText = data.weather.Temperature.Metric.Value;
        //console.log(data.weather.Temperature.Metric.Value);
    })
    .catch(err => console.log(err));
    
    
})