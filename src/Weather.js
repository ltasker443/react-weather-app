import React, { useState } from "react";
import axios from "axios";
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
                        <h3>{weather.city}</h3>
                        <div className="row">
                            <div className="col-6 temperature">
                                <ul>
                                    <li className="text-capitalize">{weather.description}</li>
                                    <li className="temperature">{Math.round(weather.temperature)}ºF</li>
                                </ul>
                            </div>
                        <div className="col-6">
                            <ul>
                                <li className="humidity">Humidity: {weather.humidity}%</li>
                                <li className="wind">Wind: {Math.round(weather.wind)}mph</li>
                                <li className="current-feel">Feels Like: {Math.round(weather.feel)}ºF</li>
                            </ul>
                        </div>
                    </div>
                    <footer className="github-link">
                <a href="https://github.com/ltasker443/react-weather-app" rel="noreferrer" target="_blank"> Open Source </a> by Laura Tasker
            </footer>
            </div>
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
  
            

