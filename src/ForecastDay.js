import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}º`;
    }
    function minTemperature() {
        let temperature=Math.round(props.data.temp.min);
        return `${temperature}º`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ];
        return days[day];
    }

    return  (
        <div>
            <div className="Forecast-day">{day()}</div> 
                 <WeatherIcon code={props.data.weather[0].icon} size={36} color="#455d7a"/>
                    <div className="Forecast-temperatures">
                        <span className="Forecast-max"> {maxTemperature()} </span>
                        <span className="Forecast-min"> {minTemperature()} </span>
                    </div>
            </div>
    );
    }
