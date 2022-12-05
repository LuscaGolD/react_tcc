
import axios from "axios"; 

const api = axios.create({
    baseURL: 'https://api.igdb.com'
});

export default api;