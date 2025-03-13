import axios from "axios";

const servers = {
    development: {
        url: 'http://127.0.0.1:8000',
        parameter: '/api',
        version: '/v1'
    },

    production: {
        url: 'https://ecommerceapi-main-n6r2eh.laravel.cloud',
        parameter: '/api',
        version: '/v1'
    }
}

const baseURL = servers[process.env.APP_ENV] ?? false

if (!baseURL) {
    // TODO:
}

export const api = axios.create({
    baseURL: baseURL.url+baseURL.parameter+baseURL.version,
    timeout: 20000
})