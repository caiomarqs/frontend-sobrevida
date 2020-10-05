import React from 'react'

import { DashboardHeader } from '../../components'

const DepoimentoPainel = () => {
    return (
        <div id='dash-painel'>
            <div className='container'>
                <DashboardHeader title={`Depoimento`} linkName='Voltar' href='/dash' />
            </div>
        </div>
    )
}

export { DepoimentoPainel }