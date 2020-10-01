import React from 'react'
import { CloseIcon } from '../Icons'

const CloseAlert = ({ mesages = [], className, onClick,  ...props }) => {
    return (
        <div className={`close-alert ${className}`} {...props}>
            <div className='close-alert-mesages'>
                {
                    mesages.map((mesage, i) => {
                        return <span key={i}>{mesage}</span>
                    })
                }
            </div>
            <CloseIcon onClick={onClick}/>
        </div>
    )
}

export { CloseAlert }