require('dotenv').config();
const axios = require('axios');

const axiosClient = axios.create({
    baseURL: process.env.SERVER_API,
    headers: {
        'X-User-Agent': process.env.SERVER_API_USER_AGENT,
        'X-Proxy-Location': process.env.SERVER_API_PROXY_LOCATION,
        'X-RapidAPI-Key': process.env.SERVER_API_KEY,
        'X-RapidAPI-Host': process.env.SERVER_API_HOST,
    },
});

module.exports = axiosClient;
