// axiosInstance.js

import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})  

export default axiosInstance