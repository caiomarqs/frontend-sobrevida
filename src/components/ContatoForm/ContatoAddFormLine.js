import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

import { Button } from '../Button'
import { SimpleInput } from '../Inputs'
import { handleContato } from '../../view/Cadastro/InputsMasks'
import { postFamiliarContato } from '../../services'

const ContatoAddFormLine = ({ value, familiar, cancel, ...props }) => {

    const [cookie] = useCookies(['jwt'])
    const history = useHistory()


    const [contato, setContato] = useState('')

    const handleContatoAddContato = () => {
        postFamiliarContato(familiar, contato, cookie.token).then(() => {
            cancel()
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
                maxLength={15}
                htmlFor={`contato-${familiar}-add`}
                label="Contato"
            />
            <Button
                className={`solid-button-primary ${contato === '' ? 'disabled' : ''}`}
                value='Salvar Contato'
                onClick={contato === '' ? () => { } : () => handleContatoAddContato()}
            />
            <Button className='solid-button-primary' value='Cancelar' onClick={() => cancel()} />
        </div>
    )
}

export { ContatoAddFormLine }