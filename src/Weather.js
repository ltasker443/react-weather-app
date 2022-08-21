import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData.js";
import "./Weather.css";

export default function Weather() {
    const [weather, setWeather] = useState({ ready: false });
    
    function handleResponse(response) {
        console.log(response.data);
        setWeather({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            feel: response.data.main.feels_like,
            date: new Date(response.data.dt * 1000),
        })
    }
    if (weather.ready) {
        return (
            <div className="Weather">
                <div className="card">
                    <div className="card-body">
                        <form className="d-flex" role="search">
                            <input
                            className="form-control"
                            type="search"
                            autoFocus = "on"
                            autoComplete="off"
                            placeholder="City"
                            />
                            <button className="btn" type="submit">Search</button>
                        </form>
                        <WeatherData info={weather}/>
                    </div>
                     <footer className="github-link">
                        <a href="https://github.com/ltasker443/react-weather-app" rel="noreferrer" target="_blank"> Open Source </a> by Laura Tasker
                    </footer>
                </div>
        </div>
 );
    } else {
    const apiKey = "294c897fc47f4b73d1c81e6766aacc85";
    let city="Las Vegas"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
    }
    }
  
            

