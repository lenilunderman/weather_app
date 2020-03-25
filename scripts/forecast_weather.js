const form = document.querySelector('.change-location');
const city_name = document.querySelector('.city_name');
const weather_cond = document.querySelector('.weather_name');
const temp_name = document.querySelector('.temp_span span');
const img = document.querySelector('img');


form.addEventListener('submit', e =>{
    e.preventDefault();
    const city = form.name_city.value.trim();
    getCity(city)
        .then(data => console.log(data))
        .catch( () => console.log('Temperatura not found'));
    form.reset();
    
});

const KEY = '7da0a9cae42ad49baa8cef4332035a6c';
const getCity = async (city) => {

    const base  = 'http://api.weatherstack.com/current';
    const query = `?access_key=${KEY}&query=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    //return data.current.temperature;
    const weather_description = data.current.weather_descriptions;
    const temperatura = data.current.temperature;
    const img_icon = data.current.weather_icons;

    city_name.innerHTML = city;
    weather_cond.innerHTML = weather_description;
    temp_name.innerHTML = temperatura;
    //img.src = img_icon;

};












