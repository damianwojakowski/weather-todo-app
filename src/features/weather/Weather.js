import React, {Component} from 'react';
import WeatherService from "./WeatherService.js";

export default class Weather extends Component {

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