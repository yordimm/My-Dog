import axios from 'axios';

const apiUrl = 'https://dog.ceo/api';

export const Services = {
    findDogs: async () => {
        try {
            const { data } = await axios.create().get(`${apiUrl}/breeds/list/all`)
            const { message, status } = data;
            return {
                dogs: Object.keys(message),
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

export const defaultImage = 'https://buscomascota.cl/assets/user_default-6da53fc756af1e32234642a496a22cb413205ba49df744cfff0b0505615dd132.png';

const lorem = `is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type
               specimen book.It has survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged.`;
