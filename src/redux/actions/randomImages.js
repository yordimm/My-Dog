import { GET_DOG_IMAGES, GET_DOG_IMAGES_FAIL } from './types';
import { Services } from '../../services';

export function getRandomImages() {
    return async (dispatch, getState) => {
        const data = await Services.findRandomDogsImages();
        const { images, error } = data;
        if (error) {
            dispatch({ type: GET_DOG_IMAGES_FAIL })
        }
        dispatch({ type: GET_DOG_IMAGES, dogsImages: images })
    }
}
