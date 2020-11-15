import { configureStore } from '@reduxjs/toolkit';
import serviceAvailabilityReducer from '../features/service-availability/service-availability-slice.js';
import updateWeatherReducer from '../features/weather/weather-reducer.js';
import todosReducer from '../features/todo-list/todo-list-reducers.js';

export default configureStore({
    reducer: {
        serviceAvailability: serviceAvailabilityReducer,
        weather: updateWeatherReducer,
        todos: todosReducer
    },
});
