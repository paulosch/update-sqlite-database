import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    timeout: 100000,
});

export default instance;
