import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://server-ngobrol.amandawahyu.com'
});

export default axiosInstance;