import axios from 'axios';

const baseUrl = 'https://turkmenexpress.com.tm';

const axiosInstance = axios.create({
    baseURL: `${baseUrl}/api/`,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
    }
});

export { axiosInstance, baseUrl } 