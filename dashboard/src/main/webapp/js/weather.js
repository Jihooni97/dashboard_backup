$(function(){
	getClock();
	startClock();
})

const apiKey = "ce325e4c1f063224a84e1ea86e2c2b9f";
const OpenWeather = "https://api.openweathermap.org/data/2.5/weather?lat=37.497928&lon=127.027583&appid=" + apiKey;

function getWeather(){
	
}


function startClock(){
	setInterval( getClock, 1000 );
}

function getClock(){
	
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth();
	const date = now.getDate();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const today = now.getDay();
	
	var week = ['일', '월', '화', '수', '목', '금', '토'];
	var todayLabel = week[today];
	
	var clock = document.getElementById("clock");
	clock.innerText = year + "-" + month + "-" + date + "\u00A0" + todayLabel + "\n" + hours + ":" + minutes + ":" + seconds;
	
}