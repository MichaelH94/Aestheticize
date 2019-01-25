import axios from "axios";

module.export = axios.create({
    baseURL: '/api',
    timeout: 1000,
});