import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherService from "./WeatherService.js";
import {updateWeather} from "./weather-actions.js";
import WeatherIcon from './WeatherIcon';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.weatherService = new WeatherService();
    }

    render() {
        return <div>
            <h3>Weather</h3>
            {this.props.weatherInfo.weather.map((weather) => <WeatherIcon key={weather.id} weather={weather} />)}
            <p>Temperature: {this.props.weatherInfo.temp} <span>&#x2103;</span></p>
            <p>Pressure: {this.props.weatherInfo.pressure} <span>hPa</span></p>
            <p>Humidity: {this.props.weatherInfo.humidity} <span>%</span></p>
            <p>Wind Speed: {this.props.weatherInfo.wind_speed} <span>meter/sec</span></p>
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