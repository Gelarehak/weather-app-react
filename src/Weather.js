import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="weather-type"
          class="weatherImage"
        />
      </div>
      <div className="temp">
        <span className="degrees">15</span>
        <span className="cilsiuse">℃|℉</span>
      </div>
      <div className="weatherType">Cloudy</div>
      <div className="row TodayImg">
        <div className="col-1 Humidity">
          <img
            src="https://i.pinimg.com/564x/f7/99/af/f799afb17c962c62ce82d17140a89f74.jpg"
            class="Water"
            alt="dropwater"
          />
        </div>
        <div className="col-2 maxmin">
          <img
            src="https://i.pinimg.com/564x/93/22/19/93221921ec3adc255fd79c09aa5982f3.jpg"
            class="MaxMindegree"
            alt="thermometer"
          />
        </div>
        <div className="col-1 Wind">
          <img
            src="https://i.pinimg.com/564x/7f/38/48/7f3848314e386364581cd719ac2e0045.jpg"
            class="windy"
            alt="windimg"
          />
        </div>
      </div>
      <div className="row Today">
        <div className="col-1 Humidity">
          <div className="Percentage">25%</div>
        </div>
        <div className="col-2">
          <div className="row MaxMin">
            <div className="col-3 Max">18°</div>
            <div className="col-5 Min">10°</div>
          </div>
        </div>
        <div className="col-1 Wind">
          <div className="Speed">
            <span className="Speedwind">12</span>
            <span className="KilometerH">km/h</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weatherpicture"
          />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weatherpicture"
          />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weatherpicture"
          />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weatherpicture"
          />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weatherpicture"
          />
          <br />
          25℃
        </div>
        <div className="col-2">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weatherpicture"
          />
          <br />
          25℃
        </div>
      </div>
    </div>
  );
}
