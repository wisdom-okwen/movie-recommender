import axios from 'axios';
import { GEMINI_API_KEY, BASE_URL } from './config';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${GEMINI_API_KEY}`,
        'Content-Type': 'application/json',
    }
});

export const fetchData = async (endpoint, params) => {
    try {
        const response = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
