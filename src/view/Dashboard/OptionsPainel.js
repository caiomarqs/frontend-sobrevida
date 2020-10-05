import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

import { Button, CloseAlert, ConfigHeader, DashboardHeader, Loading, SimpleInput, Modal } from '../../components'
import { Authcontext, AUTH_ACTIONS } from '../../contexts'
import { authValidation, patchPasswordUser, getUser, deleteUser } from '../../services'

const OptionsPainel = () => {

    const history = useHistory()

    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])

    const { authState, dispatch } = useContext(Authcontext)

    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState([])
    const [modal, setModal] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        document.title = 'sobreVida | Configurações'
        if (!authState.user.cod) {
            getUser(cookie.id, cookie.token || authState.token).then(({ data }) => {
                setUserEmail(data.email)
                setLoading(false)
            })
        }
    }, [authState, cookie, dispatch])


    const validation = (password) => {
        const regxPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/i
        let thisError = []
        if (!regxPassword.test(password)) {
            thisError = ['A senha nova deve ter numeros, letras e 6 caracteres']
        }
        setErrors(thisError)
        return thisError.length === 0
    }

    const handleNewPass = () => {
        setOldPass('')
        setNewPass('')

        authValidation(userEmail, oldPass).then(({ data }) => {
            if (validation(newPass)) {
                if (data.password) {
                    if (oldPass === newPass) {
                        setErrors(['Sua senha nova é igual a antiga'])
                        return
                    }
                    patchPasswordUser(cookie.id, newPass, cookie.token).then(() => {
                        setErrors([])
                        setSuccess(['Senha alterada com sucesso'])
                    })
                }
                else {
                    setErrors(['Sua senha antiga está errada'])
                }
            }
        }).catch(e => {
            setErrors(['Não foi possivel alterar a senha'])
        })
    }

    const handleDeleteAcount = () => {
        deleteUser(cookie.id, cookie.token).then(() => {
            dispatch({ type: AUTH_ACTIONS.LOG_OUT })
            removeCookie('token')
            removeCookie('id')
            history.push('/')
        })
    }



    return (
        <div id='dash-painel'>
            {modal === true
                ?
                <Modal
                    id='delete-acount-modal'
                    title='Confimar Exclusão de Conta'
                    closeAction={() => { setModal(false) }}
                >
                    <p>Repita seu email da forma que está abaixo para excluir sua conta</p>
                    <span>{userEmail}</span>
                    <SimpleInput type='text' htmlFor='confirm-email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Button
                        id='confirm-delete-acount-btn'
                        className={`solid-button-primary ${email !== userEmail ? 'disabled' : ''}`}
                        value='Confirmar'
                        onClick={email !== userEmail ? () => { } : () => handleDeleteAcount(true)}
                    />
                </Modal>
                :
                <></>
            }
            <div className='container'>

                {
                    loading
                        ?
                        <Loading />
                        :
                        <>
                            <DashboardHeader title={`Opções do Perfil`} linkName='Voltar' href='/dash' />
                            {errors.length > 0 && <CloseAlert mesages={errors} className='error' onClick={() => setErrors([])} />}
                            {success.length > 0 && <CloseAlert mesages={success} className='success' onClick={() => setSuccess([])} />}
                            <ConfigHeader title='Alterar senha' />
                            <div id='changepass-container'>
                                <SimpleInput type='password' htmlFor='old-pass' label='Senha Antiga' value={oldPass} onChange={(e) => setOldPass(e.target.value)} />
                                <SimpleInput type='password' htmlFor='new-pass' label='Senha Nova' value={newPass} onChange={(e) => setNewPass(e.target.value)} />
                                <Button
                                    id='changepass-btn'
                                    className={`solid-button-primary ${(oldPass === '') || (newPass === '') ? 'disabled' : ''}`}
                                    value='Alterar a senha'
                                    onClick={(oldPass === '') || (newPass === '') ? () => { } : () => handleNewPass()}
                                />
                            </div>
                            <ConfigHeader title='Excluir conta' />
                            <div id='delete-acount-container'>
                                <p>Respeitamos a liberdade indivudal de cada pessoa, caso deseja que o seu cadastro seja excluido basta clicar no botão ao lado e confirmar a exclusão.</p>
                                <Button
                                    id='delete-acount-btn'
                                    className={`solid-button-primary`}
                                    value='Deletar conta'
                                    onClick={() => setModal(true)}
                                />
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export { OptionsPainel }