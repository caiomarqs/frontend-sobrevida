import React from 'react'

const ConfigHeader = ({ title, href, linkName, ...props }) => {
    return (
        <div className='config-header'>
            <p>{title}</p>
        </div>
    )
}

export { ConfigHeader }