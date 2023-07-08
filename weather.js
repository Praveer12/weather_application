

const apiKey = "45317220d585e5f6e613856fb2596f21";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");



async function checkWeather(city){

    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);

  if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
  }
  else{

    var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        if(data.main.humidity > 60 ){
            weatherIcon.src = "storm.png";
        }
        else weatherIcon.src = "cloudy-day.png";
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear-sky.png";
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "thunderstorm.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "snowy.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }



}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);

})

checkWeather();
