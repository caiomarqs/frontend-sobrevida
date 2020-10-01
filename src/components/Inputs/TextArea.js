import React from 'react'

const TextArea = ({ htmlFor, label, limit, value, onChange }) => {
    return (
        <div className='text-area-group' id={`text-area-group-${htmlFor}`}>
            <label htmlFor={htmlFor} className='simple-label'>{label}</label>
            <textarea id={`text-area-${htmlFor}`} className='text-area' value={value.substring(0, limit)} onChange={onChange} />
        </div>
    )
}

export { TextArea }