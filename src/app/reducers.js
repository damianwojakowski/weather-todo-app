import { combineReducers } from 'redux';
import serviceAvailabilityReducer from '../features/service-availability/service-availability-slice.js';
import updateWeatherReducer from '../features/weather/weather-reducer.js';
import todosReducer from '../features/todo-list/todo-list-reducers.js';

export const rootReducer = combineReducers({
    serviceAvailability: serviceAvailabilityReducer,
    weather: updateWeatherReducer,
    todos: todosReducer
});