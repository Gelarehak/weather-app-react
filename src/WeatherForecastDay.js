import React from "react";
import WeatherIcon from "./WeatherIcon";

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
      <WeatherIcon code={props.data.weather[0].icon} size={150} />
      <div className="DayDegree">{props.data.temp}℃</div>
    </div>
  );
}
