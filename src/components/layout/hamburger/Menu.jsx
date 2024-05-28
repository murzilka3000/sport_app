import React from 'react'
import menu from './menu.data'
import cn from 'clsx'
import s from './Hamburger.module.scss'

const Menu = ({isShow}) => {

    const handleLogout = () => {};

    return (
        <nav className={cn(s.menu, {[s.show]: isShow})}>
            <ul>
                {
                    menu.map((t, index) => {
                        return(
                            <li key={index}>
                                {t.title}
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