import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import Menu from './Menu'

const Hamburger = () => {

    const [isShow, setIsShow] = useState(false)

    return (
        <div>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? <IoClose size={27}/> : <GiHamburgerMenu size={27}/>}
            </button>
            <Menu isShow={isShow}/>
        </div>
    )
}

export default Hamburger