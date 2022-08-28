import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js"
import "./Forecast.css";


export default function Forecast(props) {
    let[loaded, setLoaded] = useState(false);
    let[forecastData, setForecastData] = useState(null);

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }
    if(loaded) {
        return (
           <div className="Forecast">
            <div className="row">
                {forecastData.map(function (dailyForecast, index) {
                    if (index >0 && index < 7) {
                        return (
                            <div className="col-2" key={index}>
                                <ForecastDay data={dailyForecast} />
                            </div> 
                        );
                    }
                    return null;
                })}
            </div>
        </div> 
        ); 
        } else {
            const apiKey = "294c897fc47f4b73d1c81e6766aacc85";
            let latitude=props.coordinates.lat;
            let longitude=props.coordinates.lon;
            let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`; 
        
            axios.get(apiUrl).then(handleResponse);   
             
            return null;
        }
}