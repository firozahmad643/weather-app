const cityname = document.getElementById("cityname");
const search = document.getElementById("search");
const showcityname = document.getElementById("showcityname");
const maintemp = document.getElementById("maintemp")
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const mintemp = document.getElementById("mintemp");
const maxtemp = document.getElementById("maxtemp");
const weathericon = document.getElementById("weathericon");
const datahide2 = document.getElementsByClassName("datahide2");



const getinfo = async (event) => {
  event.preventDefault()
  const cname = cityname.value;
  if (cname === "") {
    showcityname.innerText = "Please enter the city name before search";
   
  } else {
    try {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=30f22855aa63ee7c57129fba4628732a`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      maintemp.style.display = 'block'


      if (data.name != undefined) {
        showcityname.innerText = data.name
        maintemp.innerText = data.main.temp;
        wind.innerText = data.wind.speed + " km/h";
        humidity.innerText = data.main.humidity;
        mintemp.innerText = data.main.temp_min;
        maxtemp.innerText = data.main.temp_max;
        console.log(data.weather[0].main);

        const tempstatus = data.weather[0].main

        if (tempstatus == "Sunny") {
          weathericon.innnerHTML = '<i class="fa-solid fa-sun"  style="font-size: 110px;color:yellow"></i>'

        }
        else if (tempstatus == "Clouds") {
          weathericon.innerHTML = '<i class="fa-solid fa-cloud" style="font-size: 110px;color:  rgb(84, 178, 214)"></i>'


        }
        else if (tempstatus == "Rainy") {
          weathericon.innerHTML = '<i class="fa-solid fa-cloud-rain" style="font-size: 110px;color:  rgb(84, 178, 214)"></i>'

        }
        else {
          weathericon.innerHTML = '<i class="fa-solid fa-cloud" style="font-size: 110px;color: rgb(84, 178, 214)"></i>'
        }
      }
      else {
        showcityname.innerText = "look error in console";
        maintemp.style.display = 'none'
        console.log(data);
      }
    }
    catch (err) {
      // console.log(err);
      // showcityname.innerText = err.message;
    }
  }


}

search.addEventListener("click", getinfo)
