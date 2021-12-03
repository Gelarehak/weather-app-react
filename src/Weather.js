import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handelResorce(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      temperatureMax: response.data.main.temp_max,
      temperatureMin: response.data.main.temp_min,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Type a City..."
                className="form-control"
              />
            </div>
            <div className="col-3 ">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              />
            </div>
          </div>
        </form>
        <div className="cityName">Tehran</div>
        <div className="date">Thursday 02 December 2021</div>
        <div className="weatherType text-capitalize">{weather.description}</div>
        <div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-type"
            class="weatherImage"
          />
        </div>
        <div className="temp">
          <span className="Degrees">{Math.round(weather.temperature)}</span>
          <span className="cilsiuse">℃|℉</span>
        </div>

        <div className="row TodayImg">
          <div className="col-3 Humidity ">
            <i class="fas fa-tint Water"></i>
          </div>
          <div className="col-4 maxmin">
            <i class="fas fa-thermometer-quarter MaxMindegree"></i>
          </div>
          <div className="col-3 Wind">
            <i class="fas fa-wind windy"></i>
          </div>
        </div>
        <div className="row Today">
          <div className="col-3 Humidity">
            <div className="Percentage">{weather.humidity}%</div>
          </div>
          <div className="col-4">
            <div className="row MaxMin">
              <div className="col-2 Max">
                {Math.round(weather.temperatureMax)}°
              </div>
              <div className="col-5 Min">
                {Math.round(weather.temperatureMin)}°
              </div>
            </div>
          </div>
          <div className="col-3 Wind">
            <div className="Speed">
              <span className="Speedwind">{Math.round(weather.wind)}</span>
              <span className="KilometerH">km/h</span>
            </div>
          </div>
        </div>
        <hr />
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
      </div>
    );
  } else {
    let apiKey = "f02bf8b085f29f8504d48daf88ff0017";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handelResorce);
    return <p>"Loading..."</p>;
  }
}
