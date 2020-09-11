import axios from 'axios'

const sendQuestion = (question) => {
    console.log(process.env.REACT_APP_SERVER_URL)
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'GET', 
        url: `/watson`, 
        params: { question: question } 
    })
}

export { sendQuestion }