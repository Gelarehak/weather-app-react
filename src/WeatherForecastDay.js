import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saterday",
    ];
    return days[day];
  }
  return (
    <div>
      <div className="Day"> {day()} </div>
      <div className="dayImg">
        <WeatherIcon code={props.data.weather[0].icon} size={35} color="gray" />
      </div>
      <div className="DayDegree">{Math.round(props.data.temp.day)}℃</div>
    </div>
  );
}
