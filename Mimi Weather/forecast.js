// accuweather api
const accuApi = "8yQZiQy8A3PHWLgnJz0dx7AorGPGi456";

// to get weqather information, returns weather reponse
const getWeather = async (key) => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const parm = `${key}?apikey=${accuApi}`;
    const response = await fetch(baseUrl+parm);
    const weather = await response.json();
    return (weather[0]);

}
// to get city information, returns location key
const getCity = async (city) =>{
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const parm = `?apikey=${accuApi}&q=${city}`;

    const response = await fetch(baseUrl+parm);
    const data = await response.json();
    return (data[0].Key);
}

// call to get city information and then its weather
/*getCity(city)
.then(key => {
    //console.log(key)
    return (getWeather(key))
}).then(weather => {
    //console.log('hi');
})
.catch(err => console.log(err));*/

