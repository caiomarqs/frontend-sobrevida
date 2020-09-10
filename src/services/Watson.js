import axios from 'axios'

const sendQuestion = (question) => {
    return axios({ 
        method: 'GET', 
        url: `https://sobrevida-backend-dev.herokuapp.com/watson`, 
        params: { question: question } 
    })
}

export { sendQuestion }