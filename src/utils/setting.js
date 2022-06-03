import axios from "axios"
//doamain backend
export const DOMAIN = 'https://vlg-api-reserve.azurewebsites.net'
export const USER_LOGIN = 'userLogin'
export const ACCESSTOKEN = 'accessToken'
//config axios
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,

})
http.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCESSTOKEN)
    config.headers = {
        ...config.headers,
        ['Authorization']: token ? `Bearer ${token}` : ''
        // ['']: "",

    }
    return config;
}, (error) => { return Promise.reject(error) })

