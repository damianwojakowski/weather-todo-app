import React from 'react';

export default function WeatherIcon(props) {
    return <div>
        <p>{props.weather.description.toUpperCase()}</p>
        <img src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} />
    </div>
}