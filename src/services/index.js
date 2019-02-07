import axios from 'axios';

export const apiUrl = 'https://dog.ceo/api';

export const Services = {
    findDogs: async () => {
        try {
            const { data } = await axios.create().get(`${apiUrl}/breeds/list/all`)
            return {
                dogs: data.message,
                error: false
            }
        } catch (error) {
            return {
                message: 'Error al encontrar la lista de perros',
                error,
                dogs: []
            }
        }
    },
    findRandomDogsImages: async () => {
        try {
            const { data } = await axios.create().get(`${apiUrl}/breeds/image/random/2`)
            return {
                images: data.message,
                error: false
            }
        } catch (error) {
            return {
                message: 'Error al encontrar Imagenes aleatorias',
                error,
                images: []
            }
        }
    },
    findBreedImages: async (breed, quantity) => {
        try {
            const { data } = await axios.create().get(`${apiUrl}/breed/${breed}/images/random/${quantity}`)
            return {
                images: data.message,
                error: false
            }
        } catch (error) {
            return {
                message: 'Error al encontrar Imagenes de la raza de perro actual',
                error,
                images: []
            }
        }
    }

}