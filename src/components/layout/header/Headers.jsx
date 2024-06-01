import React from 'react'
import s from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import { useLocation, useNavigate } from "react-router-dom";
import { TfiUser } from 'react-icons/tfi'

const Headers = ({backLink =''}) => {

    // const { isAuth } = useAuth()

    const {pathname} = useLocation()
    const navigate = useNavigate()

    return (
        <header className={s.header}>
            {pathname !== '/' ? (
            <button onClick={() => {navigate(backLink)}}>
                <FiArrowLeft size={27} color='white'/>
            </button>) : 
            <button onClick={() => {navigate('/profile')}}>
                <TfiUser size={27} color='white'/>
            </button>}
            <Hamburger/>
        </header>
    )
}

export default Headers