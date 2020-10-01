import React from 'react'

const DropDown = ({ htmlFor, label, firstOption, options, value, onChange }) => {
    return (
        <div className='dropdown-input-group' id={`dropdown-input-group-${htmlFor}`}>
            <label htmlFor={htmlFor}>{label}</label>
            <select id={`select-${htmlFor}`} name={htmlFor} value={value} onChange={onChange}>
                <option value={0}>{firstOption}</option>
                {
                    options.map((option, i) => {
                        return <option key={i} value={option.value}>{option.label}</option>
                    })
                }
            </select>
        </div>
    )
}

export { DropDown }