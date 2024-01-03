let apikey = "0911423f09fd4cb7658b05c82a476b70";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city ;
let userCity =document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity =document.getElementById("humidity-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img");

async function getWeatheData() {
	if (userCity.value=="") {
		alert("enter city name");
	}else{
		city = userCity.value;
	

	let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
	
	let data =await responce.json();
	ct.innerHTML=data.name;
	temperature.innerHTML=Math.round(data.main.temp-273.15)+"°C" ;
	humidity.innerHTML=data.main.humidity+"%";
	windInfo.innerHTML=data.wind.speed+"km/h";
	userCity.value="";
	if (data.weather[0].main="Clear") {
		weatherImage.src="clear.png";
	}
	else if (data.weather[0].main="snow") {
		weatherImage.src="snow.png";
	}else if(data.weather[0].main="drizzle"){
		weatherImage.src="drizzle.png";
	}
	else if(data.weather[0].main="Mist"){
		weatherImage.src="Mist.png";
	}
	else if(data.weather[0].main="Rain"){
		weatherImage.src="rain.png";
	}
	else if(data.weather[0].main="Clouds"){
		weatherImage.src="clouds.png";
	}
}
}
