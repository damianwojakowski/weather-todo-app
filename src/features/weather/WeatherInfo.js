import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import ReactTooltip from 'react-tooltip';

import './WeatherInfo.css';


export default function WeatherInfo(props) {
    let temperatureClass = classNames({
        'temperature': true,
        'temperature-high': props.weatherInfo.temp > 25,
    });

    return (<div>
        <ReactTooltip />
        <p data-tip="This is temeprature in &#x2103;">Temperature:
            <span className={temperatureClass}><strong> {props.weatherInfo.temp}</strong></span>
            <span> &#x2103;</span>
        </p>
        <p>Pressure: {props.weatherInfo.pressure} <span>hPa</span></p>
        <p>Humidity: {props.weatherInfo.humidity} <span>%</span></p>
        <p>Wind Speed: {props.weatherInfo.wind_speed} <span>meter/sec</span></p>
    </div>);
}

WeatherInfo.propTypes = {
    weatherInfo: PropTypes.shape({
        temp: PropTypes.number,
        pressure: PropTypes.number,
        humidity: PropTypes.number,
        wind_speed: PropTypes.number,
    })
};
