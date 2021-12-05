import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handelResponce(event) {}

  let apiKey = "f02bf8b085f29f8504d48daf88ff0017";
  let longtitu = props.coord.lon;
  let latititu = props.coord.lat;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latititu}&lon=${longtitu}&exclude={part}&appid=${apiKey}
&units=${units}`;
  axios.get(apiUrl).then(handelResponce);

  return (
    <div className="row">
      <div className="col-2">
        {" "}
        <div className="Day"> Sunday </div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="weatherpicture"
          class="dayImg"
        />
        <div className="DayDegree">25℃</div>
      </div>
    </div>
  );
}
