import axios from 'axios'

const getUser = async (id, token) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'GET',
        url: `/doador/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export { getUser }