import React from "react";
import FormatDate from "./FormatDate.js";

export default function WeatherData(props) {
    return (
        <div className="weather-data">
            <h3>{props.city}</h3>
                    <div className="row">
                            <div className="col-6 temperature">
                                <ul>
                                    <li><FormatDate date={props.date} /> </li>
                                    <li className="text-capitalize">{props.description}</li>
                                    <li className="temperature">{Math.round(props.temperature)}ºF</li>
                                </ul>
                            </div>
                        <div className="col-6">
                            <ul>
                                <li className="humidity">Humidity: {props.humidity}%</li>
                                <li className="wind">Wind: {Math.round(props.wind)}mph</li>
                                <li className="current-feel">Feels Like: {Math.round(props.feel)}ºF</li>
                            </ul>
                        </div>
                     </div>
        </div>
    )
}