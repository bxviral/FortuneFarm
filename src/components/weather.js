import React, { useEffect, useState } from "react";
import "../weather.css";
import dot from "../images/dot.png";
import bgimg from "../images/bg.jpg";
import p1 from "../images/cloudy.jpg";
import p2 from "../images/rainy.webp";
import p3 from "../images/sunny.jpg";

const Weather = () => {
  const [city, setCity] = useState("");
  const [bg, setBg] = useState(bgimg);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState([0, 0, 0, 0, 0]);
  const [curr, setCurr] = useState([0, 0, 0, 0, 0]);
  const [min, setMin] = useState([0, 0, 0, 0, 0]);
  const [max, setMax] = useState([0, 0, 0, 0, 0]);
  const [img, setImg] = useState([{ dot }, { dot }, { dot }, { dot }, { dot }]);
  const [day, setDay] = useState([0, 0, 0, 0, 0]);

  function getData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY1}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.list[0].weather[0].main === "Clouds") {
          console.log(data.list[0].weather[0].main);
          setBg(p1);
        } else if (data.list[0].weather[0].main === "Rain") {
          setBg(p2);
        } else if (data.list[0].weather[0].main === "Clear") {
          setBg(p3);
        } else if (data.list[0].weather[0].main === "Snow") {
          setBg("../images/snowy.jpg");
        } else {
          setBg(bgimg);
        }
        setHumidity([
          data.list[0].main.humidity,
          data.list[1].main.humidity,
          data.list[2].main.humidity,
          data.list[3].main.humidity,
          data.list[4].main.humidity,
        ]);
        setWind([
          data.list[0].wind.speed,
          data.list[1].wind.speed,
          data.list[2].wind.speed,
          data.list[3].wind.speed,
          data.list[4].wind.speed,
        ]);
        setCurr(Number(data.list[0].main.temp - 273.15).toFixed(1));
        setMin([
          Number(data.list[0].main.temp_min - 273.15).toFixed(1),
          Number(data.list[1].main.temp_min - 273.15).toFixed(1),
          Number(data.list[2].main.temp_min - 273.15).toFixed(1),
          Number(data.list[3].main.temp_min - 273.15).toFixed(1),
          Number(data.list[4].main.temp_min - 273.15).toFixed(1),
        ]);
        setMax([
          Number(data.list[0].main.temp_max - 273.15).toFixed(1),
          Number(data.list[1].main.temp_max - 273.15).toFixed(1),
          Number(data.list[2].main.temp_max - 273.15).toFixed(1),
          Number(data.list[3].main.temp_max - 273.15).toFixed(1),
          Number(data.list[4].main.temp_max - 273.15).toFixed(1),
        ]);
        setImg([
          `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`,
          `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`,
          `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`,
          `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`,
          `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`,
        ]);
      })
      .catch((err) => alert("Something went wrong..." + err));
  }

  useEffect(() => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY1}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCity(data.city.name);
          if (data.list[0].weather[0].main === "Clouds") {
            console.log(data.list[0].weather[0].main);
            setBg(p1);
          } else if (data.list[0].weather[0].main === "Rain") {
            setBg(p2);
          } else if (data.list[0].weather[0].main === "Clear") {
            setBg(p3);
          } else if (data.list[0].weather[0].main === "Snow") {
            setBg("../images/snowy.jpg");
          } else {
            setBg(bgimg);
          }
          setHumidity([
            data.list[0].main.humidity,
            data.list[1].main.humidity,
            data.list[2].main.humidity,
            data.list[3].main.humidity,
            data.list[4].main.humidity,
          ]);
          setWind([
            data.list[0].wind.speed,
            data.list[1].wind.speed,
            data.list[2].wind.speed,
            data.list[3].wind.speed,
            data.list[4].wind.speed,
          ]);
          setCurr(Number(data.list[0].main.temp - 273.15).toFixed(1));
          setMin([
            Number(data.list[0].main.temp_min - 273.15).toFixed(1),
            Number(data.list[1].main.temp_min - 273.15).toFixed(1),
            Number(data.list[2].main.temp_min - 273.15).toFixed(1),
            Number(data.list[3].main.temp_min - 273.15).toFixed(1),
            Number(data.list[4].main.temp_min - 273.15).toFixed(1),
          ]);
          setMax([
            Number(data.list[0].main.temp_max - 273.15).toFixed(1),
            Number(data.list[1].main.temp_max - 273.15).toFixed(1),
            Number(data.list[2].main.temp_max - 273.15).toFixed(1),
            Number(data.list[3].main.temp_max - 273.15).toFixed(1),
            Number(data.list[4].main.temp_max - 273.15).toFixed(1),
          ]);
          setImg([
            `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`,
            `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`,
            `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`,
            `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`,
            `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`,
          ]);
          getCityName(latitude, longitude);
        });
    };

    const getCityName = (latitude, longitude) => {
      fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY1}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCity(data[0].name + ", " + data[0].state + ", " + data[0].country);
        })
        .catch((err) => alert("Something went wrong..." + err));
    };

    const error = (error) => {
      alert("Unable to retrieve your location, error: " + error.message);
    };
    navigator.geolocation.getCurrentPosition(success, error);
    function setWeekDay(day) {
      if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
      } else {
        return day + d.getDay();
      }
    }
    setDay([
      setWeekDay(0),
      setWeekDay(1),
      setWeekDay(2),
      setWeekDay(3),
      setWeekDay(4),
    ]);
  }, []);

  const d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `${bg}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          fontFamily: "Montserrat Alternates",
        }}
      >
        <center style={{ display: "inline-flex" }}>
          <input
            type="text"
            name=""
            id="cityInput"
            placeholder="Enter city name"
            onChange={() => setCity(document.getElementById("cityInput").value)}
          />
          <button onClick={getData}>Show</button>
          <h2 style={{ textAlign: "center", paddingLeft: "10px" }}>{city}</h2>
        </center>
        <center>
          <div className="icon">
            <p className="weather">{days[day[0]]}</p>
            <div className="image">
              {" "}
              <img src={img[0]} className="imgclass" alt="" id="img1" />{" "}
            </div>
            <div className="image">
              <p className="minValues" id="day1Min">
                Current: {curr}°C
              </p>
            </div>
            <p className="maxValues" id="day1Max">
              Humidity: {humidity[0]}
            </p>
            <p className="maxValues" id="day1Max">
              Wind: {wind[0]}
            </p>
            <p className="minValues" id="day1Min">
              Min: {min[0]}°C
            </p>
            <p className="maxValues" id="day1Max">
              Max: {max[0]}°C
            </p>
          </div>
        </center>

        <div id="weatherContainer">
          <div id="iconsContainer">
            <div className="icons">
              <p className="weather" id="day2">
                {days[day[1]]}
              </p>
              <div className="image">
                {" "}
                <img src={img[1]} className="imgclass" alt="" id="img2" />{" "}
              </div>
              <p className="maxValues" id="day1Max">
                Humidity: {humidity[1]}
              </p>
              <p className="maxValues" id="day1Max">
                Wind: {wind[1]}
              </p>
              <p className="minValues" id="day2Min">
                Min: {min[1]}°C
              </p>
              <p className="maxValues" id="day2Max">
                Max: {max[1]}°C
              </p>
            </div>
            <div className="icons">
              <p className="weather" id="day3">
                {days[day[2]]}
              </p>
              <div className="image">
                {" "}
                <img src={img[2]} className="imgclass" alt="" id="img3" />{" "}
              </div>
              <p className="maxValues" id="day1Max">
                Humidity: {humidity[2]}
              </p>
              <p className="maxValues" id="day1Max">
                Wind: {wind[2]}
              </p>
              <p className="minValues" id="day3Min">
                Min: {min[2]}°C
              </p>
              <p className="maxValues" id="day3Max">
                Max: {max[2]}°C
              </p>
            </div>
            <div className="icons">
              <p className="weather" id="day4">
                {days[day[3]]}
              </p>
              <div className="image">
                {" "}
                <img src={img[3]} className="imgclass" alt="" id="img4" />{" "}
              </div>
              <p className="maxValues" id="day1Max">
                Humidity: {humidity[3]}
              </p>
              <p className="maxValues" id="day1Max">
                Wind: {wind[3]}
              </p>
              <p className="minValues" id="day4Min">
                Min: {min[3]}°C
              </p>
              <p className="maxValues" id="day4Max">
                Max: {max[3]}°C
              </p>
            </div>
            <div className="icons">
              <p className="weather" id="day5">
                {days[day[4]]}
              </p>
              <div className="image">
                {" "}
                <img src={img[4]} className="imgclass" alt="" id="img5" />{" "}
              </div>
              <p className="maxValues" id="day1Max">
                Humidity: {humidity[4]}
              </p>
              <p className="maxValues" id="day1Max">
                Wind: {wind[4]}
              </p>
              <p className="minValues" id="day5Min">
                Min: {min[4]}°C
              </p>
              <p className="maxValues" id="day5Max">
                Max: {max[4]}°C
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
