import React from 'react'

const Slide = ({children, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export { Slide }