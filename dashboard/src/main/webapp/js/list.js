$(function(){
	
})

function list(){
	$.ajax({
		url : "/selectList.do",
		type : "POST",
		dataType : "JSON",
		cache : false,
		success : function(result) {
			
			for(var i = 0; i < result.selectList.length; i++){
				var year = result.selectList[i].data_time.substr(2,2);
				var month = result.selectList[i].data_time.substr(4,2);
				var day = result.selectList[i].data_time.substr(6,2);
				var hour = result.selectList[i].data_time.substr(8,2);
				var minute = result.selectList[i].data_time.substr(10,2);
				var second = result.selectList[i].data_time.substr(12,2);
				
				var html = '<tr>';
					html += '<td>' + result.selectList[i].site_code + '</td>';
					html += '<td>' + year + "년" + month + "월" + day + "일" + hour + "시" + '</td>';
					html += '<td>' + result.selectList[i].gl + '</td>';
					html += '<td>' + result.selectList[i].ec + '</td>';
					html += '<td>' + result.selectList[i].temp + '</td>';
					html += '<td>' + '</td>';
					html += '</tr>';
					$('#table').append(html);
			}
		}
	})
}