import * as DogsActions from './dogs'
import * as RandomImagesActions from './randomImages'

export const GET_DOGS = 'GET_DOGS'
export const GET_DOGS_FAIL = 'GET_DOGS_FAIL'

export const GET_DOG_IMAGES = 'GET_DOG_IMAGES'
export const GET_DOG_IMAGES_FAIL = 'GET_DOG_IMAGES_FAIL'

export const NEXT = 'NEXT'



export const ActionCreators = Object.assign({},
    DogsActions,
    RandomImagesActions
)