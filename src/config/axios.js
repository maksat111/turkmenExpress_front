import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://turkmenexpress.com.tm/api/',
    timeout: 60000,
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Host': '<calculated when request is sent>'
    }
});

export { axiosInstance } 