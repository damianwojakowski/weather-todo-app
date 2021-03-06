import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherIcon(props) {
    return <div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}/>
        <p><kbd>{props.weather.description}</kbd></p>
    </div>
}

WeatherIcon.propTypes = {
    weather: PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string
    })
};
