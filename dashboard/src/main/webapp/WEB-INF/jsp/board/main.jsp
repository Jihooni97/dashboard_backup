<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/css/ol.css" type="text/css"> -->
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.13.0/build/ol.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.1/Chart.bundle.js"></script>
<link rel="stylesheet" type="text/css" href="/css/dashboard.css" />
<link rel="stylesheet" type="text/css" href="/css/weather-icons-master/css/weather-icons.min.css" />
<script type="text/javascript" src="/js/map.js"></script>
<script type="text/javascript" src="/js/weather.js"></script>
<script type="text/javascript" src="/js/chart.js"></script>
<script type="text/javascript" src="/js/list.js"></script>
<script type="text/javascript" src="/js/paging.js"></script>
<title>DashBoard</title>
</head>

<body>
	<div id="container">
	
		<!-- 상단 -->
		<div id="top">
		
			<div id="top_contents">
				<!-- 날씨 -->
				<div id="weather">
<!-- 					<i class="wi wi-day-sunny"></i> -->
				</div>
				<!-- 시간 -->
				<div id="time">
					<h5 id="clock"></h5>
				</div>
				<!-- 제목 --> 
				<div id="board">
					<h1>DashBoard</h1>
				</div>
				
			</div>
			
		</div>

		<div id="boardBody">
			<!-- 맵 -->
			<div id="mapBoard">
				<div id="vmap"></div>
			</div>
			
			<div id="selectList">
				<table class="table">
					<tr>
						<td>site_code</td>
						<td>날짜</td>
						<td>수심(gl)</td>
						<td>전기전도도(ec)</td>
						<td>수온(temp)</td>
					</tr>
				<tbody id="table"></tbody>
				</table>
				<div id="pageBtn"></div>
			</div>
			
		</div>

		<!-- 왼쪽 -->
		<div id="leftBoard">
		
		<!-- 그래프 -->
			<div id="graph">
				<canvas id="chart1"></canvas>
			</div>

			<!-- 그래프 -->
			<div id="graph">
				<canvas id="chart2"></canvas>
			</div>

			<!-- 그래프 -->
			<div id="graph">
				<canvas id="chart3"></canvas>
			</div>
			
		</div>

		<!-- 오른쪽 -->
		<div id="rightBoard">
			<div id="select">
				<select name="type">
					<option value="gangwondo">KB001</option>
					<option value="gangwondo">SDA001</option>
					<option value="gangwondo">DU001</option>
				</select>
			</div>
		</div>
		</div>
</body>
</html>