import React, { useState } from 'react';

import { FormPage, FormFooter, SlideForm, SimpleInput, DropDown, TextArea, Slide, CheckBox, Button, CloseAlert } from '../../components'
import { SlideFormProvider } from '../../contexts'
import UFS from '../../constants/ufs'
import GRAU_FAMILIAR from '../../constants/grauFamiliar'
import { CadastroFormHeader } from './CadastroFormHedear';
import { handleContato, handleCpf, handleStringOnly } from './InputsMasks'
import { validation } from './InputsValidation'

const familiarModel = {
    nome: '',
    contato: '',
    parentesco: '',
    descParentesco: ''
}

const cadastroTitles = [
    'Primeiro precisamos saber alguns dados pesoais.',
    'Registre pelo menos um familiar para saber o seu desejo de ser doador',
    'Escreva dizendo a sua vontade de contribuir com a doação de orgãos'
]

const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [rPassword, setRPassword] = useState('')
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')
    const [familiares, setFamliares] = useState({ 0: familiarModel })
    const [depoimento, setDepoimento] = useState('')
    const [accept, setAccept] = useState(false)
    const [errors, setErrors] = useState(false)
    const [showErrors, setShowErrors] = useState(false)

    const familiaresForms = []

    const activeError = () => {
        setShowErrors(true)
        setTimeout(() => {
            setShowErrors(false)
        }, 30000)
    }

    const handleCloseError = () => {
        clearTimeout()
        setShowErrors(false)
    }

    const handleAddFamiliar = () => {
        setFamliares({ ...familiares, [`${Object.keys(familiares).length}`]: familiarModel })
    }

    const handleRemoveFamiliar = () => {
        const lastPosition = Object.keys(familiares).length - 1
        
        const { [lastPosition]: obj, ...lastFamiliares } = familiares

        setFamliares(lastFamiliares)
    }

    const handleCadastra = () => {
        if (validation(nome, email, cpf, password, rPassword, uf, cidade, familiares, depoimento, accept, setErrors)) {
            return console.log('valido')
        }
        else {
            if (accept) { activeError() }
            return console.log('invalido')
        }
    }

    return (
        <FormPage
            brandStyle="cadastro-brand"
            formStyle="cadastro-principal-container"
            imgSrc='clipBoard.png'
            pageName='Cadastro'
        >
            <div className='cadastro-form-container'>
                <SlideFormProvider>
                    <CadastroFormHeader texts={cadastroTitles} />
                    {showErrors && <CloseAlert className='error' mesages={errors} onClick={() => handleCloseError()} />}
                    <SlideForm>
                        <Slide className='cadastro-slide-1' index={0}>
                            <SimpleInput htmlFor='nome' label='Nome Completo' type='text' value={nome} onChange={(e) => handleStringOnly(e.target.value, setNome)} />
                            <SimpleInput htmlFor='email' label='E-mail' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <SimpleInput htmlFor='cpf' label='CPF' type='text' value={cpf} onChange={(e) => handleCpf(e.target.value, setCpf)} maxLength={14} />
                            <SimpleInput htmlFor='password' label='Senha' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <SimpleInput htmlFor='rPassword' label='Repita sua senha' type='password' value={rPassword} onChange={(e) => setRPassword(e.target.value)} />
                            <DropDown htmlFor='uf' label='UF' firstOption='' options={UFS} value={uf} onChange={(e) => setUf(e.target.value)} />
                            <SimpleInput htmlFor='cidade' label='Cidade' type='text' value={cidade} onChange={(e) => handleStringOnly(e.target.value, setCidade)} />
                        </Slide>
                        <Slide className='slide cadastro-slide-2' id='cadastro-slide-2' index={1}>
                            {familiaresForms}
                            {
                                // O estado de familiares trabalha com dicionario like a python
                                // então pela a chave consigo sobrescreve o valor antigo
                                Object.entries(familiares).forEach(([key, familiar]) => {
                                    familiaresForms.push(
                                        <div key={key}>
                                            <SimpleInput
                                                htmlFor={`nome-familiar`} label='Nome Completo' type='text' value={familiar.nome}
                                                onChange={(e) => {
                                                    setFamliares({ ...familiares, [`${key}`]: { ...familiar, nome: e.target.value } })
                                                }}
                                            />
                                            <SimpleInput
                                                htmlFor={`contato-familiar`} label='Contato' type='text' value={familiar.contato}
                                                onChange={(e) => {
                                                    let value = handleContato(e.target.value)
                                                    setFamliares({ ...familiares, [`${key}`]: { ...familiar, contato: value } })
                                                }}
                                                maxLength={15}
                                            />
                                            <DropDown
                                                htmlFor={`grau-familiar`} label='Parentesco'
                                                firstOption='Selecione um parentesco'
                                                options={GRAU_FAMILIAR}
                                                value={familiar.parentesco}
                                                onChange={(e) => {
                                                    setFamliares({ ...familiares, [`${key}`]: { ...familiar, parentesco: e.target.value } })
                                                }}
                                            />
                                            {
                                                familiares[key].parentesco === 'OUTRO'
                                                &&
                                                <SimpleInput
                                                    htmlFor={`desc-parentesco-familiar`} label='Descrição' type='text' value={familiar.descParentesco}
                                                    onChange={(e) => {
                                                        setFamliares({ ...familiares, [`${key}`]: { ...familiar, descParentesco: e.target.value } })
                                                    }}
                                                />
                                            }
                                            <hr></hr>
                                        </div>
                                    )
                                })
                            }
                            {
                                Object.keys(familiares).length < 3
                                &&
                                <button id='add-btn' onClick={() => handleAddFamiliar()}>Adicionar famliar</button>}
                            {
                                Object.keys(familiares).length >= 2
                                &&
                                <button id='remove-btn' onClick={() => handleRemoveFamiliar()}>Remover famliar</button>
                            }
                        </Slide>
                        <Slide className='slide cadastro-slide-3' index={2}>
                            <TextArea htmlFor='depoimento' label='Deixe registrado sua vontade de doar' limit={256} value={depoimento} onChange={(e) => setDepoimento(e.target.value)} />
                            <CheckBox label='Você aceita ser um doador de orgãos?' checked={accept} onClick={() => setAccept(!accept)} />
                            <Button id="cadastro-btn" className={`solid-button-primary ${accept === false ? 'disabled' : ''}`} value="Cadastrar" onClick={() => handleCadastra()} />
                        </Slide>
                    </SlideForm>
                </SlideFormProvider>
                <FormFooter />
            </div>
        </FormPage>
    )
}

export { Cadastro }