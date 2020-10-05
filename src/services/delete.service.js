import axios from 'axios'

const deleteUser = async (id, token) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'DELETE',
        url: `/doador/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export { deleteUser }