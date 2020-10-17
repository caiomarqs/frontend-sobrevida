import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

import { Button } from '../Button'
import { SimpleInput } from '../Inputs'
import { handleContato } from '../../view/Cadastro/InputsMasks'
import { putFamiliarContato, deleteFamiliarContato } from '../../services'

const ContatoEditFormLine = ({ value, familiar, codContato, ...props }) => {

    const [cookie] = useCookies(['jwt'])
    const history = useHistory()


    const [contato, setContato] = useState('')


    const handleEditarContato = () => {
        putFamiliarContato(familiar, contato, codContato, cookie.token).then(() => {
            setContato('')
        })
    }

    const handleDeleteContato = () => {
        deleteFamiliarContato(familiar, codContato, cookie.token).then(() => {
            history.push('/familiares')
        })
    }

    const handleInputContato = (value) => {
        const newContato = handleContato(value)
        setContato(newContato)
    }

    return (
        <div className="contato-line-form">
            <SimpleInput
                value={contato}
                onChange={(e) => handleInputContato(e.target.value)}
                placeholder={value.numero}
                maxLength={15}
                htmlFor={`contato-${familiar}-${codContato}`}
                label="Contato"
            />
            <Button
                className={`solid-button-primary ${contato === value.numero || contato === '' ? 'disabled' : ''}`}
                value='Editar Contato'
                onClick={contato === value.numero || contato === '' ? () => { } : () => handleEditarContato()}
            />
            <Button className='solid-button-primary' value='Excluir Contato' onClick={() => handleDeleteContato()} />
        </div>
    )
}

export { ContatoEditFormLine }