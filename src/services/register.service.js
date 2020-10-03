import axios from 'axios'

const postUser = async (user) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'POST',
        url: '/doador',
        data: {
            nome: user.nome,
            sobreNome: user.nome,
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

const postFamiliar = async (familiar, idUser) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'POST',
        url: '/familiar',
        data: {
            nome: familiar.nome,
            sobreNome: familiar.nome,
            parentesco: familiar.parentesco,
            descParentesco: familiar.descParentesco === undefined ? ''  : familiar.descParentesco,
            contatos: [
                {
                    numero: familiar.numero
                }
            ],
            codDoador: idUser
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export { postUser, postFamiliar }