import axios from 'axios'

const getEstados = async () => {
    return axios({
        method: 'GET',
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados`,
    })
}

const getCidades = async (uf) => {
    return axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        method: 'GET',
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
    })
}


export { getEstados, getCidades }