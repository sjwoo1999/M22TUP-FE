import React, { useState, useEffect } from "react";
import MapComponent from "./MapComponent";
import dummyData from "./dummyData";
import userData from "./userData";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // 사용자의 위치 정보를 받아와 userData 업데이트
    userData.userlatitude = 37.234567; // 사용자의 위도 데이터
    userData.userlongitude = 128.876543; // 사용자의 경도 데이터
    userData.places = 1; // 사용자가 선택한 가게 종류 등의 정보

    // 더미 데이터를 임시로 사용
    setPlaces(dummyData);
  }, []);

  return (
    <div className="App">
      <h1>M22T UP</h1>
    </div>
  );
}

// return (
//   <div className="App">
//     <MapComponent
//       userlatitude={userData.userlatitude}
//       userlongitude={userData.userlongitude}
//       places={places}
//     />
//   </div>
// );

export default App;
//index.html, MapComponent.js, userData.js, dummyData.js, App.js만 썻습니다.
