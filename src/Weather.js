import React, { useState } from "react";
import WeatherData from "./WeatherData.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            feel: response.data.main.feels_like,
            date: new Date(response.data.dt * 1000),
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = "294c897fc47f4b73d1c81e6766aacc85";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="card">
                    <div className="card-body">
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input
                            className="form-control"
                            type="search"
                            autoFocus = "on"
                            autoComplete="off"
                            placeholder="City"
                            />
                            <button className="btn" type="submit" onChange={handleChange}>Search</button>
                        </form>
                        <WeatherData data={weatherData} />
                    </div>
                </div>
        </div>
 );
    } else {
    search();
    return "Loading";
    }
    }
  
            

