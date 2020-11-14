import { configureStore } from '@reduxjs/toolkit';
import serviceAvailabilityReducer from '../features/service-availability/service-availability-slice.js';
import updateWeatherReducer from '../features/weather/weather-reducer.js';

export default configureStore({
    reducer: {
        serviceAvailability: serviceAvailabilityReducer,
        updateWeatherReducer: updateWeatherReducer
    },
});
