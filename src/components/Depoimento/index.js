import React from 'react';

const Depoimento = ({ img, title, subTitle, body ='.', ...otherProps }) => {

    const imgSrc = img === undefined ? require('../../assets/img/chatballons.png') : img
    
    const thisBoddy = () => {
        const paragraphs = body.split('.p')
        return paragraphs.map((content, i) => <p key={`depoimento-body-p-${i}`} className='depoimento-body'>{content}</p>)
    }

    return (
        <div className='depoimento-card'>
            <img alt="Depoimento" src={imgSrc} />
            <div className='depoimento-content'>
                <h6>{title}</h6>
                {subTitle === undefined ? <></> : <p className='depoimento-subtitle'>{subTitle}</p>}
                {thisBoddy()}
            </div>
        </div>
    )
}

export { Depoimento }