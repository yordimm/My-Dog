import { combineReducers } from 'redux';
import * as dogsReducer from './dogs';
import * as dogImagesReducer from './dogImages';

export default combineReducers(Object.assign(
    dogsReducer,
    dogImagesReducer
))