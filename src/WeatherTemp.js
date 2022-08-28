import React from "react";
import "./WeatherData.css"

export default function WeatherTemp(props) {
    
    return (
            <div className="temperature">
                <span className="temp">{Math.round(props.fahrenheit)}</span>
                <span className="units">ºF </span>
            </div>
    );
}
