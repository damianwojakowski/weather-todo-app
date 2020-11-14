export default class WeatherService {

    constructor() {
        this.setLocation = this.setLocation.bind(this);
        this.location = {
            latitude: '',
            longitude: ''
        }
    }

    getCurrentWeather() {
        this.getLocation();
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setLocation);
        } else {
            // TODO show "please enable geolocation in your browser"
        }
    }

    setLocation(location) {
        this.location.latitude = location.coords.latitude;
        this.location.longitude = location.coords.longitude;

        console.log("this.position.latitude: ", this.location.latitude);
        console.log("this.position.longitude: ", this.location.longitude);
    }

}