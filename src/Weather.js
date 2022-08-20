import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">
        <input type="search" placeholder="City" />
        <button type="submit" value="Search">
            Search
        </button>
        <div class="card">
            <div class="card-body">
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
            </div>
        </div>
    </div>
    )
}
