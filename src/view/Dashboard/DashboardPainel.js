import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import { DashboardHeader, Loading } from '../../components'
import { Authcontext, AUTH_ACTIONS } from '../../contexts'
import { getUser } from '../../services'

const DashboardPainel = () => {

    const { authState, dispatch } = useContext(Authcontext)

    const [nome, setNome] = useState('')
    const [loading, setLoading] = useState(true)

    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])

    useEffect(() => {
        document.title = 'sobreVida | Dashboard'
 
        if (!authState.user.cod) {
            //Aqui eu recupero do state pois o cookie está com delay para definir
            getUser(authState.id, authState.token).then(({ data }) => {
                setNome(data.nome)
                dispatch({ type: AUTH_ACTIONS.SET_USER_INFOS, payload: data })
                setLoading(false)
            })
        }

    }, [cookie, authState, dispatch])

    return (
        <div id='dash-painel'>
            <div className='container'>
                {
                    loading
                        ?
                        <Loading />
                        :
                        <DashboardHeader title={`Olá, ${nome}`} linkName='Opções' href='/options' />
                }
            </div>
        </div>
    )
}

export { DashboardPainel }