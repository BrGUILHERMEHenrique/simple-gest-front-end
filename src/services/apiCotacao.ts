import axios from 'axios';

const configuredAxios = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/'
});

export default configuredAxios;