$(function(){
	selectChart();
})



function selectChart() {
	$.ajax({
		url : "/chart.do",
		type : "POST",
		dataType : "JSON",
		cache : false,
		success : function(result) {
			
			createChart('chart1', result.data, 'gl');
			createChart('chart2', result.data, 'ec');
			createChart('chart3', result.data, 'temp');
		}
	});
}

// chart__
function createChart(chart_id, data, type) {
	var ctx = document.getElementById(chart_id);
//	var chartData = [];
	var glData = [];
	var tempData = [];
	var ecData = [];
	var chartLabels = [];
	
	for (var i = 0; i < data.length; i++) {
		glData.push(data[i].gl); //y축
		ecData.push(data[i].ec);
		tempData.push(data[i].temp);
		chartLabels.push(data[i].data_time.substr(2, 6)); //x축
	};
	
	var data_1 = {
			labels : chartLabels,
			datasets : [ {
				label : type,
				backgroundColor : 'rgb(255, 99, 132)',
				borderColor : 'rgb(255, 99, 132)',
				borderWidth : 1,
				data : glData,
			} ]
		};

	var option = {
		maintainAspectRatio : false,
		scales : {
			yAxes : [ {
				ticks : {
					beginAtZero : true,
					fontSize : 5,
				}
			} ],
			
			xAxes : [ {
				ticks : {
					fontSize : 5,
				}
			}]
		}
	};
	var config = {
		type : 'line',
		data : data_1,
		option : option,
	};

	// create chart
	var chart = new Chart(ctx, config);
}

//function createChart2(chart_id, data) {
//	var ctx = document.getElementById(chart_id);
//	var chartData1 = [];
//	var chartLabels1 = [];
//	
//	for (var i = 0; i < data.length; i++) {
//		chartData1.push(data[i].ec);
//		chartLabels1.push(data[i].data_time.substr(2, 6));
//	};
//	
//	var data_1 = {
//			labels : chartLabels1,
//			datasets : [ {
//				label : 'ec',
//				backgroundColor : 'rgb(255, 99, 132)',
//				borderColor : 'rgb(255, 99, 132)',
//				borderWidth : 1,
//				data : chartData1,
//			} ]
//		};
//
//	var option = {
//		maintainAspectRatio : false,
//		scales : {
//			yAxes : [ {
//				ticks : {
//					beginAtZero : true,
//					fontSize : 5,
//				}
//			} ],
//			
//			xAxes : [ {
//				ticks : {
//					fontSize : 5,
//				}
//			}]
//		}
//	};
//	var config = {
//		type : 'line',
//		data : data_1,
//		option : option,
//	};
//
//	// create chart
//	var chart = new Chart(ctx, config);
//}
//
//function createChart3(chart_id, data) {
//	var ctx = document.getElementById(chart_id);
//	var chartData1 = [];
//	var chartLabels1 = [];
//	
//	for (var i = 0; i < data.length; i++) {
//		chartData1.push(data[i].temp);
//		chartLabels1.push(data[i].data_time.substr(2, 6));
//	};
//	
//	var data_1 = {
//			labels : chartLabels1,
//			datasets : [ {
//				label : 'temp',
//				backgroundColor : 'rgb(255, 99, 132)',
//				borderColor : 'rgb(255, 99, 132)',
//				borderWidth : 1,
//				data : chartData1,
//			} ]
//		};
//
//	var option = {
//		maintainAspectRatio : false,
//		scales : {
//			yAxes : [ {
//				ticks : {
//					beginAtZero : true,
//					fontSize : 5,
//				}
//			} ],
//			
//			xAxes : [ {
//				ticks : {
//					fontSize : 5,
//				}
//			}]
//		}
//	};
//	var config = {
//		type : 'line',
//		data : data_1,
//		option : option,
//	};

	// create chart
//	var chart = new Chart(ctx, config);
//}