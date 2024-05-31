import React from 'react'
import menu from './menu.data'
import s from './Hamburger.module.scss'
import cn from 'clsx'
import {Link} from "react-router-dom";

const Menu = ({isShow}) => {

    const handleLogout = () => {};

    return (
        <nav className={cn(s.menu, {[s.show]: isShow})}>
            <ul>
                {
                    menu.map((t, index) => {
                        return(
                            <li key={index}>
                                <Link to={t.link}>{t.title}</Link>
                            </li>
                        )
                    })
                }
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Menu