import React from 'react'

import { DashboardHeader } from '../../components'

const FamiliaresPainel = () => {
    return (
        <div id='dash-painel'>
            <div className='container'>
                <DashboardHeader title={`Familiares`} linkName='Voltar' href='/dash' />
            </div>
        </div>

    )
}

export { FamiliaresPainel }