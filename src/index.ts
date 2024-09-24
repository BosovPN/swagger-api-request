import axios from 'axios';
import JSONbig from 'json-bigint';
import { Pet } from './types';

const PETS_API_URL = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';

const fetchPets = async (): Promise<Pet[]> => {
    try {
        const response = await axios.get(PETS_API_URL, {
            // Using json-bigint to parse the response and work with large numbers
            transformResponse: (data) => {
                return JSONbig().parse(data); // Store numbers as BigInt
            }
        });

        // Convert BigInt numbers to scientific notation
        const pets = response.data.map((pet: any) => {
            return {
                ...pet,
                // Check for id before conversion
                id: pet.id ? Number(pet.id).toExponential() : null,
                category: pet.category ? {
                    ...pet.category,
                    id: pet.category.id ? Number(pet.category.id).toExponential() : null
                } : null,
                tags: pet.tags ? pet.tags.map((tag: any) => ({
                    ...tag,
                    id: tag.id ? Number(tag.id).toExponential() : null
                })) : []
            };
        });

        return pets;
    } catch (error) {
        console.error('Error while retrieving data:', error);
        throw new Error('Failed to fetch pets.');
    }
}

fetchPets()
    .then(pets => {
        console.log(JSON.stringify(pets, null, 2));
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
