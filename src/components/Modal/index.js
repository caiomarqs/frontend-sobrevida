import React from 'react'
import { CloseIcon } from '../Icons'

const Modal = ({ title, closeAction = () => {}, id, ...props }) => {
    return (
        <>
            <div className='modal-p-backdrop' onClick={() => closeAction()} />
            <div className='modal-p-container' id={id}>
                <div className='modal-p-header'>
                    <span>{title}</span>
                    <CloseIcon onClick={() => closeAction()} />
                </div>
                <div className='modal-p-content'>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export { Modal }