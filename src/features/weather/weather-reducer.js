import {ACTIONS} from "./weather-actions.js";

const initialState = {
    weatherInfo: {
        "temp": 0,
        "pressure": 0,
        "humidity": 0,
        "wind_speed": 0,
        "weather": []
    }
};

function updateWeatherReducer(state = initialState, action) {
    if (action.type === ACTIONS.UPDATE) {
        return Object.assign({}, state, {
            weatherInfo: action.payload
        });
    }

    return state;
}

export default updateWeatherReducer;
