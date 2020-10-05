import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

import { Button, DashboardHeader, Loading } from '../../components'
import { Authcontext, AUTH_ACTIONS } from '../../contexts'
import { getUser } from '../../services'

const DashboardPainel = () => {

    const { authState, dispatch } = useContext(Authcontext)

    const history = useHistory()

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
                        <>
                            <DashboardHeader title={`Olá, ${nome}`} linkName='Opções' href='/options' />
                            <div className='dash-container'>
                                <div className='dash-1-cotainer'>
                                    <div className="dash-item-img">
                                        <img alt="Registre sua vontade" src={require('../../assets/img/family.png')}></img>
                                    </div>
                                    <h6>Familiares</h6>
                                    <p>Gerencie os familiares que tem o conhecimento de sua vontade.</p>
                                    <Button className='solid-button-primary' value='Gerenciar familiares' onClick={() => history.push('/familiares')}/>
                                </div>
                                <div className='dash-2-cotainer'>
                                    <div className="dash-item-img">
                                        <img alt="Registre sua vontade" src={require('../../assets/img/document.png')}></img>
                                    </div>
                                    <h6>Depoimento</h6>
                                    <p>Gerencie seu depoimento registrado para seus familiares.</p>
                                    <Button className='solid-button-primary' value='Gerenciar Depoimento' onClick={() => history.push('/depoimento')}/>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export { DashboardPainel }