export default class WeatherService {

    constructor() {
        this.updateWeatherInfo = this.updateWeatherInfo.bind(this);
        this.location = {
            latitude: '',
            longitude: ''
        };
        this.API_KEY = "";
        this.setApiKey();
        this.updateWeatherAction = null;
    }

    setApiKey() {
        const apiKey = process.env.REACT_APP_API_KEY;

        if (apiKey) {
            this.API_KEY = process.env.REACT_APP_API_KEY;
        } else {
            console.error("REACT_APP_API_KEY not set");
        }
    }

    getCurrentWeather(updateWeatherAction) {
        this.getLocationAndUpdateWeather();
        this.updateWeatherAction = updateWeatherAction;
    }

    getLocationAndUpdateWeather() {
        if (!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.updateWeatherInfo);
        } else {
            console.error("geolocation disabled or not supported by the browser");
        }
    }

    updateWeatherInfo(location) {
        this.location.latitude = location.coords.latitude;
        this.location.longitude = location.coords.longitude;

        console.log("this.position.latitude: ", this.location.latitude);
        console.log("this.position.longitude: ", this.location.longitude);

        let url = 'https://api.openweathermap.org/data/2.5/onecall' +
            '?lat=' + location.coords.latitude +
            '&lon=' + location.coords.longitude +
            '&exclude=minutely,hourly,daily' +
            '&units=metric' +
            '&appid=' + this.API_KEY;

        fetch(url)
            .then(res => res.json())
            .then(data => (
                data && data.current
                    ? this.updateWeatherAction(data.current)
                    : null
            ))
            .catch(() => console.error("WEATHER API call failed"));
    }

}