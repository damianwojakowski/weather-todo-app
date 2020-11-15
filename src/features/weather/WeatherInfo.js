import React from 'react';

export default function WeatherInfo(props) {
    return <div><p>Temperature: {props.weatherInfo.temp} <span>&#x2103;</span></p>
        <p>Pressure: {props.weatherInfo.pressure} <span>hPa</span></p>
        <p>Humidity: {props.weatherInfo.humidity} <span>%</span></p>
        <p>Wind Speed: {props.weatherInfo.wind_speed} <span>meter/sec</span></p>
    </div>
}