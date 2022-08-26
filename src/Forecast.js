import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";
import "./Forecast.css";


export default function Forecast(props) {
    function handleResponse(response) {
        console.log(response);
    }
    
    const apiKey = "294c897fc47f4b73d1c81e6766aacc85";
    let latitude=props.coordinates.lat;
    let longitude=props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`; 
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="Forecast">
            <div className="row">
                <div className="col-2">
                    <div className="Forecast-day">Sun</div> 
                    <WeatherIcon code="01d" size={36} color="#5dacbd"/>
                    <div className="Forecast-temperatures">
                        <span className="Forecast-max">104º</span>
                        <span className="Forecast-min">89º</span>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}