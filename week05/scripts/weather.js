const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weaher-icon');
const captionDesc = document.querySelector('figcaption');

const url ='https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=-6.64&appid={7a4bfb22f4e1329c7356ba7471d3389d}&units=imperial'

async function apiFetch(){
    try{
        const response = await fetch (url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
    }
}

apiFetch();



  