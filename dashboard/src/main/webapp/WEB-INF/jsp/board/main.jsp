<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/css/ol.css" type="text/css"> -->
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.13.0/build/ol.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js"></script> -->
<link rel="stylesheet" type="text/css" href="/css/dashboard.css" />
<script type="text/javascript" src="/js/map.js"></script>
<script type="text/javascript" src="/js/weather.js"></script>
<script type="text/javascript" src="/js/chart.js"></script>
<title>DashBoard</title>
</head>

<body>
	<div id="container">
	
		<!-- 상단 -->
		<div id="top">
		
			<div id="top_contents">
				<!-- 날씨 -->
				<div id="weather">
					
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
			
			<table id="selectList">
				<tr>
					<td>SDA001</td>
					<td>gl</td>
					<td>ec</td>
					<td>temp</td>
				</tr>
			</table>
			
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
		<div id="rightBoard"></div>
		
	</div>
</body>
</html>