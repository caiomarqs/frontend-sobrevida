import axios from 'axios'

const sendQuestion = (question) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'GET', 
        url: `/watson`, 
        params: { question: question } 
    })
}

export { sendQuestion }