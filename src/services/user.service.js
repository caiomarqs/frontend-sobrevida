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

const postUser = async (user) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'POST',
        url: '/doador',
        data: {
            nome: user.nome.substr(0, user.nome.indexOf(' ')), //Pegando o primeiro nome
            sobreNome: user.nome.substr(user.nome.indexOf(' ') + 1), //Pegando o sobre nome
            email: user.email,
            senha: user.password,
            cpf: user.cpf,
            dataNasc: "1990-03-15",
            endereco: {
                uf: user.uf,
                cidade: user.cidade
            },
            depoimento: {
                depoimento: user.depoimento,
                pathToFile: ""
            }
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const putUser = async (id, user, token) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'PUT',
        url: `/doador/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: {
            nome: user.nome,
            sobreNome: user.sobreNome,
            email: user.email,
            cpf: user.cpf,
            dataNasc: user.dataNasc,
            endereco: {
                uf: user.endereco.uf,
                cidade: user.endereco.cidade,

            },
            depoimento: {
                depoimento: user.depoimento.depoimento,
                pathToFile: user.depoimento.pathToFile
            }
        }
    })
}

const patchPasswordUser = async (id, password, token) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'PATCH',
        url: `/doador/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: {
            senha: password
        }
    })
}


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

export { getUser, postUser, putUser, patchPasswordUser, deleteUser }