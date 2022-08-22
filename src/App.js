import React from "react";
import Weather from "./Weather.js"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Las Vegas"/>

        <footer className="github-link">
             <a href="https://github.com/ltasker443/react-weather-app" rel="noreferrer" target="_blank"> Open Source </a> by Laura Tasker & hosted on <a href="https://symphonious-sable-c29c5d.netlify.app/" rel="noreferrer" target="_blank">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

