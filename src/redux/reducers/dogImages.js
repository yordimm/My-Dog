import createReducer from '../createReducer'
import { GET_DOG_IMAGES, GET_DOG_IMAGES_FAIL } from '../actions/types'


export const randomImagesState = createReducer({ lastUpdated: null, dogsImages: [] }, {
    [GET_DOG_IMAGES](state, action) {
        return { ...state, dogsImages: action.dogsImages, errordogsImages: false, lastUpdated: Date.now() };
    },
    [GET_DOG_IMAGES_FAIL](state) {
        return {
            ...state,
            errordogsImages: true

        };
    },
})