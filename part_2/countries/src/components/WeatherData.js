import { useEffect, useState } from "react";
import axios from "axios";

const WeatherData = ({ city }) => {
    //city serves as the country capital/name entered by the user 
    //line 6 stores the api key saved in .env file
  const OPENWEATHER_API_KEY = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState([]);

  //fetches data from the called endpoint
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
        // console.log(response.data)
      });
  }, []);

  //main, wind and speed are values accessed from the endpoint
  return (
    <>
      {weather.main ? (
        <div>
          <h2>Weather in {city}</h2>
          <div>Temperature {weather.main.temp}°C</div>
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>Wind {weather.wind.speed} m/s</div> 
        </div>
      ) : null}
    </>
  );
};

export default WeatherData;