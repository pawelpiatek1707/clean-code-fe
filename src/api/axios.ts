import a from 'axios'
import { BASE_URL } from './consts'
import { getToken } from './helpers'

const axios = a.create({
    baseURL: BASE_URL,
    withCredentials: false
})

axios.interceptors.request.use(
    async (request) => {
        if (request?.url) {
            const accessToken = getToken()

            if (accessToken && request && request.headers && (request.headers['Authorization'] === '' || !request.headers['Authorization'])) {
                request.headers['Authorization'] = `Bearer ${accessToken}`
                return request
            }
        }
        return request
    },
    (error: any) => {
        Promise.reject(error)
    }
)

export default axios