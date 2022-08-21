import React from "react";
import FormatDate from "./FormatDate.js";

export default function WeatherData(props) {
    return (
        <div className="WeatherData">
            <h3>{props.data.city}</h3>
                    <div className="row">
                            <div className="col-6 temperature">
                                <ul>
                                    <li><FormatDate date={props.data.date} /> </li>
                                    <li className="text-capitalize">{props.data.description}</li>
                                    <li className="temperature">{Math.round(props.data.temperature)}ºF</li>
                                </ul>
                            </div>
                        <div className="col-6">
                            <ul>
                                <li className="humidity">Humidity: {props.data.humidity}%</li>
                                <li className="wind">Wind: {Math.round(props.data.wind)}mph</li>
                                <li className="current-feel">Feels Like: {Math.round(props.data.feel)}ºF</li>
                            </ul>
                        </div>
                     </div>
        </div>
    )
}