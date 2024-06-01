import React from 'react'
import s from './Button.module.scss'
import cn from 'clsx'

const Button = ({children, clickHandler, size='xl'}) => {
  return (
    <div className={s.wrapper}>
        <button 
        className={cn(s.button, s[size])} 
        onClick={clickHandler}
        >
            {children}
        </button>
    </div>
  )
}

export default Button