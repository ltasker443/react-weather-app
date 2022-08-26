import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";

export default function Forecast() {
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