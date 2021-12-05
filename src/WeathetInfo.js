import React from "react";
import FormatDay from "./FormatDay";
import WeatherIcon from "./WeatherIcon";
import WeatherTempareture from "./WeatherTempareture";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="cityName">{props.data.city}</div>
      <div className="date">
        <FormatDay date={props.data.date} />
      </div>
      <div className="weatherType text-capitalize">
        {props.data.description}
      </div>
      <div>
        <WeatherIcon code={props.data.icon} size={150} />
        <WeatherTempareture temp={props.data.temperature} />
      </div>

      <div className="row TodayImg">
        <div className="col-3 Humidity ">
          <i class="fas fa-tint Water"></i>
        </div>
        <div className="col-4 MaxMin">
          <i class="fas fa-thermometer-quarter MaxMindegree"></i>
        </div>
        <div className="col-3 Wind">
          <i class="fas fa-wind windy"></i>
        </div>
      </div>
      <div className="row Today">
        <div className="col-3 Humidity">
          <div className="Percentage">{props.data.humidity}%</div>
        </div>
        <div className="col-4">
          <div className="row MaxMin">
            <div className="col-2 Max">
              {Math.round(props.data.temperatureMax)}°
            </div>
            <div className="col-5 Min">
              {Math.round(props.data.temperatureMin)}°
            </div>
          </div>
        </div>
        <div className="col-3 Wind">
          <div className="Speed">
            <span className="Speedwind">{Math.round(props.data.wind)}</span>
            <span className="KilometerH">km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
