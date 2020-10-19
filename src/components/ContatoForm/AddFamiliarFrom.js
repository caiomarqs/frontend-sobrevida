import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

import { Button } from '../Button'
import { SimpleInput, DropDown } from '../Inputs'
import { handleContato, handleStringOnly } from '../../view/Cadastro/InputsMasks'
import { familiarValidation } from '../../view/Cadastro/InputsValidation'
import GRAU_FAMILIAR from '../../constants/grauFamiliar'
import { postFamiliar } from '../../services'

const AddFamiliarForm = ({ cancel = () => { }, success, errors, ...props }) => {

    const [cookie] = useCookies(['jwt'])

    const [nome, setNome] = useState('')
    const [numero, setContato] = useState('')
    const [parentesco, setParentesco] = useState('')
    const [descParentesco, setDescParentesco] = useState('')

    const handleAddFamiliar = () => {
        const familiar = { nome, numero, parentesco, descParentesco }

        const [validation, errMsgs] = familiarValidation(familiar)

        if (validation) {
            postFamiliar(familiar, cookie.id, cookie.token).then(() => {
                success(['Familiar cadastrado'])
                errors([])
                cancel()
            })
                .catch(() => {
                    errors(['Erro ao cadastrar'])
                })
        }
        else {
            errors(errMsgs)
        }
    }

    return (
        <div className="add-familiar-form">
            <SimpleInput
                htmlFor={`nome-familiar`}
                label='Nome Completo'
                type='text'
                value={nome}
                onChange={(e) => handleStringOnly(e.target.value, setNome)}
            />
            <SimpleInput
                htmlFor={`contato-familiar`}
                label='Contato'
                type='text'
                value={numero}
                onChange={(e) => setContato(handleContato(e.target.value))}
                maxLength={15}
            />
            <DropDown
                htmlFor={`grau-familiar`} label='Parentesco'
                firstOption='Selecione um parentesco'
                options={GRAU_FAMILIAR}
                value={parentesco}
                onChange={(e) => setParentesco(e.target.value)}
            />
            {
                parentesco === 'OUTRO'
                &&
                <SimpleInput
                    htmlFor={`desc-parentesco-familiar`}
                    label='Descrição'
                    type='text'
                    value={descParentesco}
                    onChange={(e) => handleStringOnly(e.target.value, setDescParentesco)}
                />
            }
            <div className='btns-container'>
                <Button className={`solid-button-primary`} value='Cancelar' onClick={cancel} />
                <Button className={`solid-button-primary`} value='Salvar' onClick={() => handleAddFamiliar()} />
            </div>
        </div>
    )

}

export { AddFamiliarForm }