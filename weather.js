const API = {
    key: "fced10567f04f17e729425543ac82732",
    url: "https://api.openweathermap.org/data/2.5/"
};

const searchBox = document.querySelector('.search-box')
searchBox.addEventListener('keypress', setQuery)

function setQuery(e){
    if(e.keyCode == 13 || e.which == 13)
    getResults(searchBox.value)
}

function getResults(query){
    fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`)
    .then(function(weather){
        return weather.json();
    })
    .then(displayResult)
}

function displayResult(weather){
    // console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let today = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = today.toLocaleDateString(); // 년, 월, 일 순으로 불러와주는 내장 객체

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${weather.main.temp}<span>°C</span>`     //Math.round();  --> 반올림

    let weatherC = document.querySelector('.current .weather');
    weatherC.innerHTML = weather.weather[0].main;

    let hiLow = document.querySelector('.hi-low');
    hiLow.innerHTML = `${weather.main.temp_min} °C / ${weather.main.temp_max} °C`;
}