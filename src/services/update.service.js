import axios from 'axios'

const patchPasswordUser = async (id, password, token) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'PATCH',
        url: `/doador/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data:{
            senha: password
        }
    })
}

export { patchPasswordUser }