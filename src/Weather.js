import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const apiKey="294c897fc47f4b73d1c81e6766aacc85";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`;  
    return (
    <div className="Weather">
        
        <div className="card">
            <div className="card-body">
                <form className="d-flex" role="search">
                    <input
                    className="form-control"
                    type="search"
                    autofocus = "on"
                    autocomplete="off"
                    placeholder="City"
                    />
                    <button className="btn" type="submit">Search</button>
                </form>

            <h3>Las Vegas </h3>

            <div className="row">
                <div className="col-6 temperature">
                    <ul>
                        <li>
                            Clear
                        </li>
                        <li>
                            103ºF
                        </li>
                        
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: 54%
                        </li>
                        <li>
                            Wind Speed: 4mph
                        </li>
                        <li>
                            Feels Like: 104º
                        </li>
                    </ul>
                </div>
            </div>
            <footer className="github-link">
                <a href="https://github.com/ltasker443/react-weather-app" rel="noreferrer" target="_blank"> Open Source </a> by Laura Tasker
            </footer>
            </div>
        </div>
    </div>
    )
}
