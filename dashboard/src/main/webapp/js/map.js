/**
 * 22.04.01 시작
 * 사용한 버전
 * jquery-3.6.0.min.js 
 * v6.13.0/build/ol.js
 */

var apikey = '83B7B5FB-6EDC-3BA5-B947-57B80DB11FDA';
var url = 'http://api.vworld.kr/req/wmts/1.0.0/' + apikey + '/Base/{z}/{y}/{x}.png';
var olCenter = new ol.proj.fromLonLat([ 127.027583, 37.497928 ]); //좌표 변환

$(function(){
	init_map()
})

function init_map(){
	var map = new ol.Map({
		target : "vmap",
		layers : [ new ol.layer.Tile({
			source : new ol.source.XYZ({
				url : url
			})
		})],
		view : new ol.View({
			center : olCenter,
			zoom : 13
		})
	})
	map.getView().setMinZoom(6);
}

function clickMarker(){
	
}