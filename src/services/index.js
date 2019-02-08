import axios from 'axios';

const apiUrl = 'https://dog.ceo/api';

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
    },
    getDescription: (name) => {
        const description = `${name} ${lorem}`
        return description;
    }

}

export const navbarRoutes = [
    {
        name: 'Home',
        link: '/home'
    },
    {
        name: 'Todos',
        link: '/todos'
    }]

const lorem = `is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type
               specimen book.It has survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged.`;
