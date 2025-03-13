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

const baseURL = process.env.APP_ENV == 'development' ? servers.development.url + servers.development.parameter + servers.development.version : servers.production.url + servers.production.parameter + servers.production.version

export const api = axios.create({
    baseURL: baseURL,
    timeout: 20000
})