import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-95d66.firebaseio.com/'
});

export default instance;