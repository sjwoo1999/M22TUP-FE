// kakaoMap.js

// 카카오 맵 API 로드
const script = document.createElement("script");
script.async = true;
script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=5a8d7281c3e1462f921db6867f9706f5&autoload=false`;
document.head.appendChild(script);

script.onload = () => {
  // 카카오 맵 초기화 및 사용
  kakao.maps.load(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978), // 서울의 좌표
      level: 8,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 추가
    const markerPosition = new kakao.maps.LatLng(37.5665, 126.978); // 마커 위치 설정
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  });
};
