import React, { useState } from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function showCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function celcius() {
        return(((props.fahrenheit - 32) * 5) /9 );
    }
    if(unit === "fahrenheit") {
    return (
            <div className="temperature">
                <span className="temp">{Math.round(props.fahrenheit)}</span>
                <span className="units">ºF |{" "}
                <a href="/" onClick={showCelcius}>
                    ºC
                </a>
                </span>
            </div>
    );
} else {
    return (
        <div className="temperature">
                <span className="temp">{Math.round(celcius())}</span>
                <span className="units">ºC |{" "}
                <a href="/" onClick={showFahrenheit}>
                    ºF
                </a>{" "}
                </span>
            </div>
    );
}
}