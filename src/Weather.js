import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeathetInfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.cityName);

  function handelResorce(response) {
    setWeather({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      temperatureMax: response.data.main.temp_max,
      temperatureMin: response.data.main.temp_min,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "f02bf8b085f29f8504d48daf88ff0017";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handelResorce);
  }

  function handleChangecity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Type a City..."
                className="form-control"
                onChange={handleChangecity}
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
        <WeatherInfo data={weather} />
        <hr />
        <WeatherForecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return <p>"Loading..."</p>;
  }
}
