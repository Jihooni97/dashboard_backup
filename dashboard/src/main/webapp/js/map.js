/**
 * 22.04.01 시작
 * 사용한 버전
 * jquery-3.6.0.min.js 
 * v6.13.0/build/ol.js
 */

var apikey = '83B7B5FB-6EDC-3BA5-B947-57B80DB11FDA';
var url = 'http://api.vworld.kr/req/wmts/1.0.0/' + apikey + '/Base/{z}/{y}/{x}.png';
var olCenter = new ol.proj.fromLonLat([ 127.027583, 37.497928 ]); //좌표 변환
var map;
var colorGreen = 'rgba(51, 255, 51)';

$(function(){
	init_map();
	clickMarker();
})

function init_map(){
		map = new ol.Map({
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


function clickMarker() {
	map.on('click', function(e) {
		// if(vectorLayer != null){
		// vectorLayer.getSource().clear();
		// }
		var lon;
		var lat;
		var vectorSource = new ol.source.Vector();

		var clickFeature = map.getFeaturesAtPixel(e.pixel); //클릭한 좌표 가져오기
		if (clickFeature.length != 0) {
			lon = iconFeature[0].A.geometry.flatCoordinages[0];
			lat = iconFeature[0].A.geometry.flatCoordinages[1];
			var clickFeatureId = clickFeature[0].A.id;

		}

		var feature = new ol.Feature({
			geometry : new ol.geom.Point([ lon, lat ])
		})

		var style = new ol.style.Style({
			image : new ol.style.Circle({
				radius : 3 * 2,
				fill : new ol.style.Fill({
					color : colorGreen
				})
			})

		})

		feature.setStyle(style);
		vectorSource.addFeature(feature);

		var vectorLayer = new ol.layer.Vector({
			source : vectorSource
		})
		map.addLayer(vectorLayer);

	})
}