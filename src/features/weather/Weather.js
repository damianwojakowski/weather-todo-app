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
        this.updateWeather = this.updateWeather.bind(this);
    }

    updateWeather(weather) {
        this.props.updateWeather(weather);
    }

    render() {
        return <div className="container">
            <div className="weather-icons">
                {this.props.weatherInfo.weather.map((weather) => <WeatherIcon key={weather.id} weather={weather} />)}
            </div>
            <WeatherInfo weatherInfo={this.props.weatherInfo} />
        </div>;
    }

    componentDidMount() {
        this.weatherService.getCurrentWeather(this.updateWeather);
    }

}

const mapStateToProps = state => {
    return {
        weatherInfo: state.weather.weatherInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateWeather: weatherInfo => dispatch(updateWeather(weatherInfo))
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