import type {ApodResponse, ApodParams} from '../types/apod';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.nasa.gov/planetary',
});

const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY'; // Se a chave da API não estiver definida, use a chave de demonstração

export async function getApod (params?:ApodParams): Promise<ApodResponse> {

    const response = await api.get<ApodResponse>('/apod', {
        params: {
            api_key: API_KEY,
            ...params,
        },
    });

    return response.data;
}