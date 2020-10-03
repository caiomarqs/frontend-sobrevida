import axios from 'axios'

const authLogIn = async (email, password) => {

    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'POST',
        url: `/auth`,
        data: {
            email: email,
            password: password
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

const authValidation = async (email, password) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'POST',
        url: `/auth/validation`,
        data: {
            email: email,
            password: password
        },
        headers: {
            'Content-Type': 'application/json'
        },
    })
}


export { authLogIn, authValidation }