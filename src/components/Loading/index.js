import React, { useEffect, useState } from 'react'

const Loading = () => {
    const [points, setPoints] = useState('.')

    useEffect(() => {
        const interval = setInterval(() => {
            if(points.length === 3){
                setPoints('.')
                return
            }
            setPoints(points + '.')
        }, 500)

        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className='loading-container'>
            <img alt='Sobrevida loading' src={require('../../assets/img/loading.gif')} />
            <p>Carregando {points}</p>
        </div>
    )
}

export { Loading }