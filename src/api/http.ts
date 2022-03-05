import axios from 'axios'
const ADMIN_API_BASE = ''

const client = axios.create({
    baseURL: ADMIN_API_BASE,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

const get = (path: string) => {
    return client.get(path)
}

const post = (path: string, payload: any, config = {}) => {
    return client.post(path, JSON.stringify(payload), config)
}

const put = (path: string, payload: any, config = {}) => {
    return client.put(path, JSON.stringify(payload), config)
}

const http = {
    get,
    post,
    put,
}

export default http
