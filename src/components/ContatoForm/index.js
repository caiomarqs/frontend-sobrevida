import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import { ContatoEditFormLine } from './ContatoEditFormLine'
import { ContatoAddFormLine } from './ContatoAddFormLine'
import { ConfigHeader } from '../Headers'
import { deleteFamiliar } from '../../services'

const FamiliarForm = ({ familiar, ...props }) => {

    const history = useHistory()

    const [cookie] = useCookies(['jwt'])

    const [showAddContato, setShowAddContato] = useState(false)

    const handleDeleteFamiliar = (codFamiliar) => {
        deleteFamiliar(codFamiliar, cookie.token).then(() => {
            history.push('/familiares')
        })
    }

    return (
        <div className="contatos-familiar-container">
            <ConfigHeader title={familiar.nome} linkName="Deletar Familiar" buttonAction={() => handleDeleteFamiliar(familiar.cod)} />
            <div>
                {familiar.contatos.map((contato, j) => <ContatoEditFormLine key={j} value={contato} familiar={familiar.cod} codContato={contato.cod} />)}
            </div>
            {(familiar.contatos.length < 2 && showAddContato) && <ContatoAddFormLine familiar={familiar.cod} cancel={() => setShowAddContato(false)} />}
            {(familiar.contatos.length < 2 && !showAddContato) && <button id='add-btn' onClick={() => { setShowAddContato(true) }}>Adicionar contato</button>}
        </div>
    )
}

export { FamiliarForm }
export * from './AddFamiliarFrom'