import axios from 'axios'

const postFamiliar = async (familiar, idUser) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'POST',
        url: '/familiar',
        data: {
            nome: familiar.nome.substr(0, familiar.nome.indexOf(' ')),
            sobreNome: familiar.nome.substr(familiar.nome.indexOf(' ')+1),
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

export {  postFamiliar }