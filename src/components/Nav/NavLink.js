import React, { useEffect, useState } from 'react';

const NavLink = ({ hash, value, className, activeDivs, ...otherProps }) => {

    const [active, setActive] = useState('')
    let thisClassName = className === undefined ? '' : className

    useEffect(() => {
        const getActive = () => {


            //Pegando a posição da div com hash na tela
            const topPosition = document.querySelector(activeDivs[0]).offsetTop;

            //Pegando o fim da posição da divs com hash na tela
            const bottomPosition = (
                document.querySelector(activeDivs[activeDivs.length - 1]).offsetTop 
                + 
                document.querySelector(activeDivs[activeDivs.length - 1]).offsetHeight
            )
            
            const navBottomPosition = window.scrollY + 96

            //Enquanto tiver dentro ele seta a classe como ativa
            if (navBottomPosition >= topPosition && navBottomPosition <= bottomPosition) {
                setActive('active')
            }
            else {
                setActive('')
            }

        }

        document.addEventListener('scroll', getActive)


        return document.addEventListener('scroll', getActive)
    }, [hash, activeDivs])

    return  <a className={thisClassName + active} href={hash} {...otherProps}>{value}</a>
}

export { NavLink }