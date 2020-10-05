import React, { useEffect, useContext, useState } from 'react'
import { useCookies } from 'react-cookie'

import { Button, DashboardHeader, Modal, TextArea, CloseAlert } from '../../components'
import { Authcontext, AUTH_ACTIONS } from '../../contexts'
import { getUser, putUser } from '../../services'

const DepoimentoPainel = () => {

    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])

    const { authState, dispatch } = useContext(Authcontext)

    const [depoimento, setDepoimento] = useState('')
    const [newDepoimento, setNewDepoimento] = useState('')
    const [modal, setModal] = useState(false)
    const [success, setSuccess] = useState([])

    useEffect(() => {
        if (!authState.user.cod) {
            getUser(cookie.id, cookie.token).then(({ data }) => {
                dispatch({ type: AUTH_ACTIONS.SET_USER_INFOS, payload: data })
                setDepoimento(data.depoimento.depoimento)
                setNewDepoimento(data.depoimento.depoimento)
            })
        }
        else {
            setDepoimento(authState.user.depoimento.depoimento)
            setNewDepoimento(authState.user.depoimento.depoimento)
        }
    }, [cookie, authState, dispatch])

    const handleUpdateDepoimento = () => {
        const newUser = { ...authState.user, depoimento: { ...authState.user.depoimento, depoimento: newDepoimento } }

        putUser(cookie.id, newUser, cookie.token).then(() => {
            setSuccess(['Depomento atulizado!'])
            setDepoimento(newDepoimento)
            setModal(false)
        })
    }

    return (
        <div id='dash-painel'>
            <div className='container'>
                {modal
                    &&
                    <Modal
                        id='depoimento-dash-modal'
                        title={depoimento !== '' ? 'Alterar Depoimento' : 'Adicionar Depoimento'}
                        closeAction={() => { setModal(false) }}
                    >
                        <p>Digite seu depoimento a baixo:</p>
                        <TextArea
                            limit={250}
                            value={depoimento !== '' ? newDepoimento : ''}
                            htmlFor='depoimento-dash-area'
                            onChange={(e) => setNewDepoimento(e.target.value)}
                        />
                        <Button className='solid-button-primary' value='Salvar' onClick={() => handleUpdateDepoimento()} />
                    </Modal>
                }
                <div id='depoimento-dash-container'>
                    <DashboardHeader title={`Depoimento`} linkName='Voltar' href='/dash' />
                    {success.length > 0 && <CloseAlert mesages={success} className='success' onClick={() => setSuccess([])} />}
                    <div className='depoimento-dash-content'>
                        {depoimento !== '' ? <p>{depoimento}</p> : <p>Você não tem nenhum depoimento registrado!</p>}
                        {depoimento !== ''
                            ? <Button className='solid-button-primary' value='Alterar depoimento' onClick={() => setModal(true)} />
                            : <Button className='solid-button-primary' value='Adicionar depoimento' onClick={() => setModal(true)} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DepoimentoPainel }