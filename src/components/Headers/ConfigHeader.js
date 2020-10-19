import React from 'react'

const ConfigHeader = ({ title, href, linkName = '', buttonAction = () => {}, ...props }) => {
    return (
        <div className='config-header'>
            <p>{title}</p>
            {linkName !== '' && <button onClick={buttonAction}>{linkName}</button>}
        </div>
    )
}

export { ConfigHeader }