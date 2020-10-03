import React from 'react'

const DashboardHeader = ({ title, href, linkName, ...props }) => {
    return (
        <div className='dash-header'>
            <h6>{title}</h6>
            <a href={href}>{linkName}</a>
        </div>
    )
}

export { DashboardHeader }