import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b20b056187ad4060ac1181923210608&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  };
  return (
    <div className="App">
      <div className="container">
        <h2>weather check</h2>
        <h5>enter your place and know the weather !</h5>
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              placeholder="enter your place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <br />

            <button className="btn btn-primary" onClick={updatePlaceData}>
              click here
            </button>
          </div>
          <div className="offset-md-4 col-10 col-md-4 weather">
            <div className="card">
              {/* <h3>place not found</h3>*/}
              {placeData.location ? (
                <div className="city">
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temp">{placeData.current.temp_c}°</div>
                  {placeData.current.condition.text}
                  <h2>{placeData.location.name}</h2>
                  {/* <h2>{placeData.location.region}</h2> */}
                  {/* <h2>{placeData.location.country}</h2> */}
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="title">humidity</div>
                        <div className="data">
                          {placeData.current.humidity}
                          <span className="unit">KMS</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">wind speed</div>
                        <div className="data">
                          {placeData.current.wind_kph}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">precipitation</div>
                        <div className="data">
                          {placeData.current.precip_in}
                          <span className="unit">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2>place not found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
