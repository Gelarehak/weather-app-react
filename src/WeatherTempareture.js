import React, { useState } from "react";

export default function WeatherTempareture(props) {
  const [unit, setUnit] = useState("celsiuce");
  function ShowCelsiuse(event) {
    event.preventDefault();
    setUnit("celsiuce");
  }
  function ShowFahrenhiet(event) {
    event.preventDefault();
    setUnit("Fahrenhiet");
  }
  if (unit === "celsiuce") {
    return (
      <div className="temp">
        <span className="Degrees">{Math.round(props.temp)}</span>
        <span className="cilsiuse">
          ℃ |
          <a href="/" onClick={ShowFahrenhiet}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temp">
        <span className="Degrees">{Math.round((props.temp * 9) / 5 + 32)}</span>
        <span className="cilsiuse">
          <a href="/" onClick={ShowCelsiuse}>
            ℃
          </a>
          |℉
        </span>
      </div>
    );
  }
}
