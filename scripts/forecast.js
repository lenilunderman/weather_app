const key1 = '4lLuKPYCDFFvRAoZQu7A1HFOwhwxHdAD';
const key2 = 'ASSxDBkgH0YTYgES6NnkVio54L47ZeQi';

// Accuweather searching the city first...
// async function because you want to return a promise.

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key1}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

getCity('boston')
    .then(data => console.log(data))
    .catch(err => console.log(err));
    