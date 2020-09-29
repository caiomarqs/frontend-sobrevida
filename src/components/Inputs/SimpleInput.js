import React from 'react'

const SimpleInput = ({ name, type, placeholder, onChange }) => {
    return (
        <>
            <label htmlFor={name} className='simple-label'>{name}</label>
            <input name={name} id={name} type={type} placeholder={placeholder} onChange={onChange} className='simple-input' />
        </>
    )
}

export { SimpleInput }