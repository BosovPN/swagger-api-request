import axios from 'axios';
import { Pet } from './types';

const PETS_API_URL = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';

const fetchPets = async (): Promise<Pet[]> => {
    try {
        const response = await axios.get(PETS_API_URL);
        const pets: Pet[] = response.data;
        return pets;
    } catch (error) {
        console.error('Error while retrieving data:', error);
        throw new Error('Failed to fetch pets.');
    }
}

fetchPets()
    .then(pets => {
        console.log(pets);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });