import React from 'react';

export default function WeatherIcon(props) {
    return <div>
        <h5>{props.weather.description.toUpperCase()}</h5>
        <img src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} />
    </div>
}