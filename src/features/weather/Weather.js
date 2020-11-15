import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import WeatherService from "./WeatherService.js";
import {updateWeather} from "./weather-actions.js";
import WeatherIcon from './WeatherIcon';
import WeatherInfo from './WeatherInfo';

import "./Weather.css";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.weatherService = new WeatherService();
    }

    render() {
        return <div>
            <h3>Weather</h3>
            <div className="weather-icons">
                {this.props.weatherInfo.weather.map((weather) => <WeatherIcon key={weather.id} weather={weather} />)}
            </div>
            <WeatherInfo weatherInfo={this.props.weatherInfo} />
        </div>;
    }

    componentDidMount() {
        this.weatherService.getCurrentWeather(this.props.updateWeatherAction);
    }

}

const mapStateToProps = state => {
    return {
        weatherInfo: state.weather.weatherInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateWeatherAction: weatherInfo => dispatch(updateWeather(weatherInfo))
    };
};

const WeatherWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather);

export default WeatherWrapper

Weather.propTypes = {
    weatherInfo: PropTypes.shape({
        temp: PropTypes.number,
        pressure: PropTypes.number,
        humidity: PropTypes.number,
        wind_speed: PropTypes.number,
        weather: PropTypes.array
    })
};