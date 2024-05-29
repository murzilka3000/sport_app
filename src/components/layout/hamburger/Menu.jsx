import React from 'react'
import menu from './menu.data'
import s from './Hamburger.module.scss'
import cn from 'clsx'


const Menu = ({isShow}) => {

    const handleLogout = () => {};

    return (
        <div className={s.wrapper}>
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
        </div>
    )
}

export default Menu