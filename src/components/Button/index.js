import React from 'react';

const Button = ({ className, value, ...otherProps}) => {
    
    const propsClassNames = className === undefined ? '' : className

    return (
        <a className={`custom-button ${propsClassNames}`} {...otherProps}>
            <span>{value}</span>
        </a>
    )
}

export { Button }