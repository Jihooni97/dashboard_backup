$(function(){
	
})

function list(){
	$.ajax({
		url : "/selectList.do",
		type : "POST",
		dataType : "JSON",
		cache : false,
		success : function(result) {
			
		}
	})
}