import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import Menu from './Menu'
import { useOutside } from '../../../hooks/useOutside.js'
import s from './Hamburger.module.scss'

const Hamburger = () => {

    const {isShow, ref, setIsShow} = useOutside(false)

    return (
        <div className={s.wrapper} ref={ref}>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? <IoClose color='white' size={30}/> : <GiHamburgerMenu color='white' size={30}/>}
            </button>
            <Menu isShow={isShow}/>
        </div>
    )
}

export default Hamburger