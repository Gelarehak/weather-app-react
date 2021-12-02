import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="body">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Type a City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="cityName">Tehran</div>
      <div className="date">Thursday 02 December 2021</div>
      <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
      <div className="degrees">15℃|℉</div>
      <div className="weatherType">Cloudy</div>
      <div className="row">
        <div className="col-4 Humidity">
          <img src="https://i.pinimg.com/564x/f7/99/af/f799afb17c962c62ce82d17140a89f74.jpg" />
          25%
        </div>
        <div className="col-4 maxmin">
          <img src="https://i.pinimg.com/564x/93/22/19/93221921ec3adc255fd79c09aa5982f3.jpg" />
          <div className="row">
            <div className="col-6 max">18℃</div>
            <div className="col-6 min">10℃</div>
          </div>
        </div>
        <div className="col-4 Wind">
          <img src="https://i.pinimg.com/564x/7f/38/48/7f3848314e386364581cd719ac2e0045.jpg" />
          12 km/h
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          {" "}
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <br />
          25℃
        </div>
      </div>
    </div>
  );
}
