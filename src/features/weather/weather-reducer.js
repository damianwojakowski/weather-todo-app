import {ACTIONS} from "./weather-actions";

const initialState = {
    weatherInfo: {
        "temp": 0
    }
};

function updateWeatherReducer(state = initialState, action) {
    if (action.type === ACTIONS.UPDATE) {
       return Object.assign({}, state, {
            weatherInfo: state.weatherInfo.concat(action.payload)
        });
    }

    return state;
}

export default updateWeatherReducer;
