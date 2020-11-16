import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import {rootReducer} from './reducers.js';
import {rootEpic} from './epics.js';

const epicMiddleware = createEpicMiddleware();

export default configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware]
});

epicMiddleware.run(rootEpic);
