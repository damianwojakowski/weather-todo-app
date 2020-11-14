export default class WeatherService {

    constructor() {
        this.updateWeatherInfo = this.updateWeatherInfo.bind(this);
        this.location = {
            latitude: '',
            longitude: ''
        };
        this.API_KEY = "";
        this.setApiKey();
    }

    setApiKey() {
        const apiKey = process.env.REACT_APP_API_KEY;

        if (apiKey) {
            this.API_KEY = process.env.REACT_APP_API_KEY;
        } else {
            // TODO display info that API KEY is not set
        }
    }

    getCurrentWeather() {
        this.getLocationAndUpdateWeather();
    }

    getLocationAndUpdateWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.updateWeatherInfo);
        } else {
            // TODO show "please enable geolocation in your browser"
        }
    }

    updateWeatherInfo(location) {
        this.location.latitude = location.coords.latitude;
        this.location.longitude = location.coords.longitude;

        console.log("this.position.latitude: ", this.location.latitude);
        console.log("this.position.longitude: ", this.location.longitude);

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=minutely,hourly,daily&appid=${this.API_KEY}`)
            .then(res => res.json())
            .then(data => (
                data && data.current
                    ? data
                    : {}
            ))
            .catch(() => -2)
            .then((result) => {
                // store.dispatch(update(result));
                // if (result > 0) {
                //     return 5000;
                // }
                // return 300;
                console.log(result);
            });
    }

}