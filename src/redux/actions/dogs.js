import { GET_DOGS, GET_DOGS_FAIL, NEXT } from './types';

export function getDogsInfo(dogs, error) {
    return async (dispatch, getState) => {
        if (error) {
            dispatch({ type: GET_DOGS_FAIL })
        }
        dispatch({ type: GET_DOGS, dogs })
    }
}

export function stopScroll() {
    return (dispatch) => {
        dispatch({ type: NEXT })
    }
}
