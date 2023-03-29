import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Replace with your backend URL


export async function register(formData) {
    try {
        const res = await axios.post(`${BASE_URL}/api/register`, formData)
        return res.data
    } catch (error) {
        throw error.response
    }
}