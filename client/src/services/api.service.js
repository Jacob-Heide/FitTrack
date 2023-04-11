import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL


export async function register(formData) {
    try {
        const res = await axios.post(`${BASE_URL}/user/register`, formData)
        return res.data
    } catch (error) {
        throw error.response
    }
}

export async function login(formData) {
    try {
        const res = await axios.post(`${BASE_URL}/user/login`, formData)
        return res.data
    } catch (error) {
        throw error.response
    }
}

export async function logout(formData) {
    try {
        const res = await axios.post(`${BASE_URL}/user/logout`, formData)
        return res.data
    } catch (error) {
        throw console.log("axios error", error.response)
        
    }
}