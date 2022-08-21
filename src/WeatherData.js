import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon";
import "./WeatherData.css";


export default function WeatherData(props) {
    return (
        <div className="WeatherData">
            <h1>{props.data.city}</h1>
            <ul>
                <li><FormatDate date={props.data.date} /> </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
                    <div className="row mt-3">
                            <div className="col-6 d-flex">
                                <div><WeatherIcon code={props.data.icon} size={52} /></div>
                                <div className="temperature"><span className="temp">{Math.round(props.data.temperature)}</span><span className="units">ºF</span></div>
                            </div>
                        <div className="col-6">
                            <ul>
                                <li><span>Day: {Math.round(props.data.max)}ºF</span> <span>Night: {Math.round(props.data.min)}ºF</span></li>
                                <li className="humidity">Humidity: {props.data.humidity}%</li>
                                <li className="wind">Wind: {Math.round(props.data.wind)}mph</li>
                                <li className="current-feel">Feels Like: {Math.round(props.data.feel)}ºF</li>
                            </ul>
                        </div>
                     </div>
        </div>
    )
}