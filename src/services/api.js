import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uniamerica-qrcode-backend.herokuapp.com/',
})

export default api;
