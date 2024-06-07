export const $axios = axios.create({
    baseUrl: '/api',
    headers: {
        'Content-type': 'application/json',
    }
})