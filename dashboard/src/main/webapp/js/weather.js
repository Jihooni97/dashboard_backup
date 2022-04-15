$(function(){
	getWeather();
	getClock();
	startClock();
})

function getWeather(){
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var date = today.getDate();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var hours_al = new Array('02', '05', '08', '11', '14', '17', '20', '23'); /* 3시간주기 23시까지 8개 */
	

	/* 동네예보 시간이 02AM부터 3시간 단위 23시까지 */
	for(var i = 0; i < hours_al.length; i++){
		var h = hours_al[i] - hours;
		if(h == -1 || h == 0 || h == -2){
			var now = hours_al[i];
		}
		if(hours == 00){
			var now = hours_al[7];
		}
	}
	
	if (month < 10) {
		month = '0' + month;
	}
	if (date < 10) {
		date = '0' + date;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	
	var yy = encodeURIComponent(year);
	var mm = encodeURIComponent(month);
	var dd = encodeURIComponent(date);
	var hh = encodeURIComponent(now);
	var base_date = yy + mm + dd;
	var base_time = hh;
	
//	var korea = [ {'region' : '서울','nx' : 60,'ny' : 127}, 
//        {'region' : '인천','nx' : 55,'ny' : 124}, 
//        {'region' : '경기도','nx' : 60,'ny' : 121}, 
//        {'region' : '강원도','nx' : 92,'ny' : 131}, 
//        {'region' : '충청북도','nx' : 69,'ny' : 106}, 
//        {'region' : '충청남도','nx' : 68,'ny' : 100},
//        {'region' : '전라북도','nx' : 63,'ny' : 89}, 
//        {'region' : '전라남도','nx' : 50,'ny' : 67}, 
//        {'region' : '경상남도','nx' : 90,'ny' : 77}, 
//        {'region' : '경상북도','nx' : 91,'ny' : 106}, 
//        {'region' : '제주도','nx' : 52,'ny' : 38} ];
	
	var x = '60', y = '127'; //서울
	var Proxy= '../proxy.jsp?resourceUrl=';
	var serviceKey = 'rHX4%2B4I4xWtQqhajT38gBBHen%2Fbgnl6BzDH%2BAFOUZaS%2B02PMAS%2BZQuMwtWzDMMjc%2F%2FBCRBEU1o3viDjh37frVQ%3D%3D';
	var apiURL = Proxy;
		apiURL += 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst';
		apiURL += '?' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent(serviceKey); /*인증키*/
		apiURL += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /*한 페이지 결과 수*/
//		apiURL += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('2'); /*페이지 번호*/
		apiURL += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /*응답자료형식 / XML/JSON*/
		apiURL += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(base_date); /*조회 날짜 20220000*/
		apiURL += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(base_time) + encodeURIComponent('00'); /*조회 시간 0000 02AM부터 3시간 간격 조회가능*/
		apiURL += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('60'); /*x좌표값*/
		apiURL += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /*y좌표값*/

	$.ajax({
		url : apiURL,
		type : 'GET',
		async : false,
		success : function(result){
			
//			result.response.body.items.item[0]
			
//			var base = result.response.body.items.item[0].category;
//			var cate = result.response.body.items.item[0];
			
			var base = result.response.body.items.item;
			var cate = '';
			var temp = '';
			var sky = '';
			
			$.each(base, function(i, o){
				cate = $(o).find("category").text();
				
				if(cate == "T1H"){
					temp = $(this).find("fcstValue").text();
				}
					
			})
			
//			<i class="wi wi-day-sunny"></i>
			$("#weather").append('<i class="wi wi-day-sunny"></i>');
			
			
		}
	})
}

//현재 날짜, 시간
function getClock(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var date = now.getDate();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var today = now.getDay();
	if (month < 10) {
		month = '0' + month;
	}
	if (date < 10) {
		date = '0' + date;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	
	var week = ['일', '월', '화', '수', '목', '금', '토'];
	var todayLabel = week[today];
	
	var clock = document.getElementById("clock");

	clock.innerText = year + "-" + month + "-" + date + "\u00A0" + todayLabel + "\n" + hours + ":" + minutes + ":" + seconds;
	
}

function startClock(){
	setInterval( getClock, 1000 );
}