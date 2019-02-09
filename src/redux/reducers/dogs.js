import createReducer from '../createReducer';
import { GET_DOGS, GET_DOGS_FAIL, NEXT } from '../actions/types';


export const dogsState = createReducer({ lastUpdated: null, dogsInfo: [], next : true }, {
    [GET_DOGS](state, action) {
        return { ...state, dogsInfo: action.dogs, errorDogs: action.error, lastUpdated: Date.now() };
    },
    [GET_DOGS_FAIL](state) {
        return {
            ...state,
            errorDogs: true

        };
    },
    [NEXT](state) {
        return {
            ...state,
            next: false
        }
    }
})