import React, { useState } from 'react'

import { FormPage, SimpleForm, SimpleInput, Button, FormFooter } from '../components'
import { CloseAlert } from '../components/Alerts'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [errors, setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    const handleEmail = (thisEmail) => {
        setEmail(thisEmail)
        activeButton()
    }

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

    const handleCloseError = () => {
        setShowErrors(false)
    }


    const activeError = () => {
        setShowErrors(true)
        setTimeout(() => {
            setShowErrors(false)
        }, 30000)
    }


    const validation = () => {

        const newErrors = [];

        const regxEmail = /([a-zA-Z\d.].+)@([a-zA-Z\d].+)([.][a-z]{2,4})([.][a-z]{2,4})?/i

        if (!regxEmail.test(email)) {
            newErrors.push('O email inserido não é válido')
        }
        if (password.trim().length < 6) {
            newErrors.push('A senha inserida não é válida')
        }

        setErrors(newErrors)

        //Retorna o propio teste
        return newErrors.length === 0
    }


    const handleLogin = () => {
        if (validation()) {

        }
        else {
            if (isActive) activeError()
        }
    }

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
                {showErrors && <CloseAlert className='error' mesages={errors} onClick={() => handleCloseError()} />}
                <div>
                    <div className='login-form-header'>
                        <h2>Log In</h2>
                        <p>Entre na sua conta do sobreVida</p>
                    </div>
                    <SimpleForm>
                        <SimpleInput htmlFor='email' label='E-mail' placeholder='Digite seu e-mail' type='email' onChange={(e) => handleEmail(e.target.value)} value={email} />
                        <SimpleInput htmlFor='password' label='Senha' placeholder='Digite sua senha' type='password' onChange={(e) => handlePass(e.target.value)} value={password} />
                        <Button value="Login" className={`solid-button-primary login-btn ${isActive === false ? 'disabled' : ''}`} onClick={() => handleLogin()} />
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