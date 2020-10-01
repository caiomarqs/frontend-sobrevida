import React from 'react'

const SimpleInput = ({ name, type, placeholder, onChange, htmlFor, label, value, ...props}) => {
    return (
        <div className='simple-input-group' id={`simple-input-group-${htmlFor}`}>
            <label htmlFor={htmlFor} className='simple-label'>{label}</label>
            <input name={htmlFor} id={`input-${htmlFor}`} type={type} placeholder={placeholder} onChange={onChange} className='simple-input' value={value} {...props}/>
        </div>
    )
}

export { SimpleInput }