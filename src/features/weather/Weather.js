import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherService from "./WeatherService.js";
import updateWeatherReducer from "./weather-reducer.js";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.weatherService = new WeatherService();
    }

    render() {
        return <div>Weather</div>;
    }

    componentDidMount() {
        this.weatherService.getCurrentWeather();
    }

}

const mapDispatchToProps = dispatch => {
    return {
        updateWeatherReducer: weatherInfo => dispatch(updateWeatherReducer(weatherInfo))
    };
};

const WeatherWrapper = connect(
    null,
    mapDispatchToProps
)(Weather);

export default WeatherWrapper