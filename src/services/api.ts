import axios from 'axios';

const configuredAxios = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('94a08da1fecbb6e8b46990538c7b50b2') || '{}')}`
    }
});

export default configuredAxios;