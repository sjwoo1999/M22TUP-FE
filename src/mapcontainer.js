var mapContainer = document.getElementById("map");
var mapOptions = {
  center: new kakao.maps.LatLng(위도, 경도), // 이용자의 위치 좌표로 설정
  level: 8,
};

var map = new kakao.maps.Map(mapContainer, mapOptions);

// 장소 검색 서비스 생성
var places = new kakao.maps.services.Places();

// 주변 장소 검색 요청
places.keywordSearch("카페", function (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    for (var i = 0; i < result.length; i++) {
      var place = result[i];

      // 반경 10km 이내의 장소들만 표시
      var distance = kakao.maps.geometry.distance(
        new kakao.maps.LatLng(위도, 경도),
        new kakao.maps.LatLng(place.y, place.x)
      );

      if (distance <= 10000) {
        var markerColor = place.category_group_code === "CE7" ? "red" : "blue";

        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(place.y, place.x),
          map: map,
          image: new kakao.maps.MarkerImage(
            `https://map.kakao.com/link/marker/${markerColor}.png`,
            new kakao.maps.Size(24, 35),
            { offset: new kakao.maps.Point(12, 35) }
          ),
        });

        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 클릭 시 장소에 대한 정보 제공
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div>${place.place_name}</div><div>${place.address_name}</div>`,
          });
          infowindow.open(map, marker);
        });
      }
    }
  }
});
