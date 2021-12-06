import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handelResponce(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f02bf8b085f29f8504d48daf88ff0017";
    let longtitu = props.coord.lon;
    let latititu = props.coord.lat;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latititu}&lon=${longtitu}&appid=${apiKey}
     &units=${units}`;

    axios.get(apiUrl).then(handelResponce);

    return "null";
  }
}
