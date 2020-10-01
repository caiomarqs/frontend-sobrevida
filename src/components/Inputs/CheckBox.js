import React from 'react'

const CheckBox = ({ name, type, placeholder, onChange, htmlFor, label, value, checked = false, onClick, ...props }) => {

    return (
        <div className='checkbox-input-group' onClick={onClick} {...props}>
            <input type="checkbox" id={htmlFor} name={htmlFor} readOnly checked={checked}/>
            <label htmlFor={htmlFor}>{label}</label>
        </div>

    )
}

export { CheckBox }