import React, { useEffect } from "react";

function MapComponent({ userlatitude, userlongitude, places }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(userlatitude, userlongitude),
      level: 8,
    };

    const map = new window.kakao.maps.Map(container, options);

    places.forEach((place) => {
      const markerColor = place.category_group_code === "CE7" ? "red" : "blue";

      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
        map: map,
        image: new window.kakao.maps.MarkerImage(
          `https://map.kakao.com/link/marker/${markerColor}.png`,
          new window.kakao.maps.Size(24, 35),
          { offset: new window.kakao.maps.Point(12, 35) }
        ),
      });

      window.kakao.maps.event.addListener(marker, "click", function () {
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div>${place.name}</div><div>${place.category}</div>`,
        });
        infowindow.open(map, marker);
      });
    });
  }, [userlatitude, userlongitude, places]);

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
}

export default MapComponent;
