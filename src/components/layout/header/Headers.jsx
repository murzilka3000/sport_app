import React from 'react'
import s from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import {Link} from "react-router-dom";

const Headers = ({backLink}) => {

    // const { isAuth } = useAuth()

    return (
        <header className={s.header}>
            <button onClick={() => {}}>
                <Link to={'/'}>
                    <FiArrowLeft size={27} color='white'/>
                </Link>
            </button>
            <Hamburger/>
        </header>
    )
}

export default Headers