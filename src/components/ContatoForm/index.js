import React, { useState } from 'react'

import { ContatoEditFormLine } from './ContatoEditFormLine'
import { ContatoAddFormLine } from './ContatoAddFormLine'
import { ConfigHeader } from '../Headers'

const ContatoForm = ({ familiar, ...props }) => {

    const [showAddContato, setShowAddContato] = useState(false)

    return (
        <div className="contatos-familiar-container">
            <ConfigHeader title={familiar.nome} />
            <div>
                {familiar.contatos.map((contato, j) => <ContatoEditFormLine key={j} value={contato} familiar={familiar.cod} codContato={contato.cod} />)}
            </div>
            {(familiar.contatos.length < 2 && showAddContato) && <ContatoAddFormLine familiar={familiar.cod} cancel={() => setShowAddContato(false)}/>}
            {(familiar.contatos.length < 2 && !showAddContato) && <button id='add-btn' onClick={() => { setShowAddContato(true) }}>Adicionar contato</button>}
        </div>
    )
}

export { ContatoForm }