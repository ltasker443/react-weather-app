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
                    <button className="button" type="submit">Search</button>
                </form>

            <h3>Las Vegas </h3>
            <h5>Clear</h5>
            <div className="row">
                <div className="col-6">
                    103º
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
            <footer>
                <a href="https://github.com/ltasker443/react-weather-app" rel="noreferrer" target="_blank"> Open Source by Laura Tasker </a>
            </footer>
            </div>
        </div>
    </div>
    )
}
