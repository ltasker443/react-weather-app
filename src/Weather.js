import React from "react";
import "./Weather.css";

export default function Weather() {
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
