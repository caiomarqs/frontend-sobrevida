import React from 'react'

import { FormPage, SimpleForm, SimpleInput, Button, FormFooter } from '../components'

const Login = () => {

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
                <h2>Log In</h2>
                <p>Entre na sua conta do sobreVida</p>
                <SimpleForm>
                    <SimpleInput htmlFor='email' label='E-mail' placeholder='Digite seu e-mail' type='email'/>
                    <SimpleInput htmlFor='password' label='Senha' placeholder='Digite sua senha' type='password'/>
                    <Button value="Login" className='solid-button-primary login-btn'/>
                </SimpleForm>
                <div className='register-login'>
                    <p>Não é um doador ainda? <a href="/register">Registre sua Vontade</a></p>
                </div>
                <FormFooter />
            </div>
        </FormPage>
    )
}

export { Login}