import React, { useCallback, useContext, useState } from 'react'
import { useCookies } from 'react-cookie'

import { FormPage, SimpleForm, SimpleInput, Button, FormFooter, CloseAlert } from '../components'
import { authLogIn, authValidation } from '../services'
import { Authcontext, AUTH_ACTIONS } from '../contexts'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory()

    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [errors, setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)


    const { dispatch } = useContext(Authcontext)


    //Handle email
    const handleEmail = (thisEmail) => {
        setEmail(thisEmail)
        activeButton()
    }

    //Handle pass
    const handlePass = (thisPass) => {
        setPassword(thisPass)
        activeButton()
    }

    const activeButton = () => {
        if (email.length !== 0 && password.length !== 0) {
            return setIsActive(true)
        }

        return setIsActive(false)
    }

    const enterKeyPress = (e, type) => {
        if (e.keyCode === 13 && type !== '') handleLogin()
    }

    const validation = useCallback(() => {
        const newErrors = [];
        const regxEmail = /([a-zA-Z\d.].+)@([a-zA-Z\d].+)([.][a-z]{2,4})([.][a-z]{2,4})?/i

        if (!regxEmail.test(email)) {
            newErrors.push('O email inserido não é válido')
        }
        if (password.trim().length < 6) {
            newErrors.push('A senha inserida não é válida')
        }

        setErrors(newErrors)
        return newErrors.length === 0

    }, [email, password])

    const apiLogIn = async () => {
        try {
            const { data } = await authLogIn(email, password)
            setErrors(['Usuario Autenticado'])
            setShowErrors(true)
            setEmail('')
            setPassword('')

            dispatch({ type: AUTH_ACTIONS.SET_SESSION })
            setCookie('token', data.token)

            history.push('/dash')
        } catch (err) {
            setErrors(['Usuário ou senha invalidos'])
            setShowErrors(true)
        }
    }

    const handleLogin = useCallback(() => {
        if (validation()) {
            authValidation(email, password).then(({ data }) => {
                const thisErrors = []
                if (!data.email) thisErrors.push('Emai não cadastrado')
                else if (!data.password) thisErrors.push('Sua senha está errada')
                if (thisErrors.length !== 0) {
                    setErrors(thisErrors)
                    setShowErrors(true)
                }
                else {
                    apiLogIn()
                }
            })
        }
        else {
            if (isActive) setShowErrors(true)
        }

    }, [email, password, isActive, validation, dispatch, history, setCookie])


    return (
        <FormPage
            pageName='Login'
            brandStyle="login-brand"
            formStyle="login-principal-container"
            imgSrc='treeLove.png'
            textBrandContainer={
                <div className="login-brand-text-container">
                    <h2>Plante vidas novas!</h2>
                    <p>Registrando sua vontade de ser um doador você ajuda que vidas continuem florecendo</p>
                </div>
            }
        >
            <div className='login-form-container'>
                <div>
                    <div className='login-form-header'>
                        <h2>Log In</h2>
                        <p>Entre na sua conta do sobreVida</p>
                    </div>
                    {showErrors && <CloseAlert className='error' mesages={errors} onClick={() => setShowErrors(false)} />}
                    <SimpleForm>
                        <SimpleInput
                            htmlFor='email'
                            label='E-mail'
                            placeholder='Digite seu e-mail'
                            type='email'
                            onChange={(e) => handleEmail(e.target.value)} value={email}
                            onKeyDown={(e) => enterKeyPress(e, e.target.value)}
                        />
                        <SimpleInput
                            htmlFor='password'
                            label='Senha'
                            placeholder='Digite sua senha'
                            type='password'
                            onChange={(e) => handlePass(e.target.value)}
                            value={password}
                            onKeyDown={(e) => enterKeyPress(e, e.target.value)}
                        />
                        <Button
                            value="Login"
                            className={`solid-button-primary login-btn ${isActive === false ? 'disabled' : ''}`}
                            onClick={() => handleLogin()}
                        />
                    </SimpleForm>
                    <div className='register-login'>
                        <p>Não é um doador ainda? <a href="/register">Registre sua Vontade</a></p>
                    </div>
                </div>
                <FormFooter />
            </div>
        </FormPage>
    )
}

export { Login }