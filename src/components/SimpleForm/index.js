import React from 'react'

const SimpleForm = ({ children, ...props }) => {
    return (
        <form id='simple-form' {...props}>
            {children}
        </form>
    )
}

export { SimpleForm }