import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import { DashboardHeader } from '../../components'
import { Authcontext } from '../../contexts'
import { getUser } from '../../services'

const DashboardPainel = () => {

    const { authState } = useContext(Authcontext)

    const [nome, setNome] = useState('')
    const [loading, setLoading] = useState(true)

    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])

    useEffect(() => {
        getUser(cookie.id, cookie.token || authState.token).then(({ data }) => {
            setNome(data.nome)
            setLoading(false)
        })
    }, [cookie, authState])

    return (
        <div id='dash-painel'>
            <div className='container'>
                {
                    loading 
                    ? 
                    <h6>Carregando...</h6> 
                    : 
                    <DashboardHeader title={`Olá, ${nome}`} linkName='Opções' href='/dash'/>
                }
            </div>
        </div>
    )
}

export { DashboardPainel }