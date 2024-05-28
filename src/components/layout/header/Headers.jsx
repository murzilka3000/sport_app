import React from 'react'
import s from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'

const Headers = ({backLink}) => {

    const { isAuth } = useAuth()

    return (
        <header className={s.header}>
            <button onClick={() => {}}>
                <FiArrowLeft/>
            </button>
            <Hamburger/>
        </header>
    )
}

export default Headers