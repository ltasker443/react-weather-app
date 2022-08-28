import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemp from "./WeatherTemp.js";
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
                                <div className="float-left"><WeatherIcon code={props.data.icon} size={56} color="#455d7a" /></div>
                                <div className="foat-left">
                                    <WeatherTemp fahrenheit={props.data.temperature} />
                                </div>
                                
                            </div>
                        <div className="col-6">
                            <ul>
                                <li><span>Hi: {Math.round(props.data.max)}º {" "} </span><span className="lo-temp">Lo: {Math.round(props.data.min)}º</span></li>
                                <li className="humidity">Humidity: {props.data.humidity}%</li>
                                <li className="wind">Wind: {Math.round(props.data.wind)}mph</li>
                                <li className="current-feel">Feels Like: {Math.round(props.data.feel)}ºF</li>
                            </ul>
                        </div>
                     </div>
        </div>
    )
}