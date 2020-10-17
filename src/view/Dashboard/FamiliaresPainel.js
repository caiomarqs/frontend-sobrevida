import React, { useEffect, useState, useContext } from 'react'
import { useCookies } from 'react-cookie'

import { DashboardHeader, Modal, Button, ContatoForm } from '../../components'
import { deleteFamiliar, getAllFamiliaresByUser } from '../../services'
import { Authcontext } from '../../contexts'

const FamiliaresPainel = () => {

    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])

    const { authState } = useContext(Authcontext)

    const [modal, setModal] = useState(false)
    const [familiarToDelete, setFamiliarToDelete] = useState(0)
    const [loading, setLoading] = useState(false)

    const [allFamiliares, setAllFamiliares] = useState([])

    useEffect(() => {

        getAllFamiliaresByUser(cookie.id, cookie.token || authState.token).then(({ data }) => {
            setAllFamiliares(data)
            setLoading(true)
        })

    }, [allFamiliares, cookie, authState])

    const handleDeleteFamiliar = () => {
        deleteFamiliar(familiarToDelete, cookie.token || authState.token).then(() => {
            setFamiliarToDelete(0)
        })
    }



    return (
        <div id='dash-painel'>
            {modal
                &&
                <Modal
                    id='delete-user-modal'
                    title='Confimar Exclusão de Familiar'
                    closeAction={() => { setModal(false) }}
                >
                    <p>Você tem certeza que deseja excluir o familiar?</p>
                    <Button
                        id='confirm-delete-acount-btn'
                        className='solid-button-primary'
                        value='Confirmar'
                        onClick={() => handleDeleteFamiliar(true)}
                    />
                </Modal>
            }
            <div className='container'>
                <DashboardHeader title={`Familiares`} linkName='Voltar' href='/dash' />
                {
                    !loading
                        ?
                        <p>Carrgando...</p>
                        :
                        allFamiliares.length === 0
                            ?
                            <p>Nenhum familiar cadastrado</p>
                            :
                            allFamiliares.map((familiar, i) => <ContatoForm familiar={familiar} key={i}/>)
                }
            </div>
        </div>
    )
}

export { FamiliaresPainel }