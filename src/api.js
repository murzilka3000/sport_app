import Cookies from 'js-cookie'
import axios from 'axios'

export const $axios = axios.create({
    baseUrl: '/api',
    headers: {
        'Content-type': 'application/json',
        Authorization: Cookies.get('red') ? `Bearer ${Cookies.get('red')}` : ''
    }
})