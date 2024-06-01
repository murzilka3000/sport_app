import React from "react"
import Headers from "./header/Headers"
import cn from 'clsx'
import s from './Layout.module.scss'

const Layout = ({children, bgImage, heading='', backLink='/'}) => {
  return (
    <section 
    className={cn(s.wrapper, {[s.otherPage]: !!heading})}
    style={{backgroundImage: `url(${bgImage})`}}
    >
        <Headers backLink={backLink}/>
        {heading && <h1 className={s.heading}>{heading}</h1>}
        {children && <div>{children}</div>}
    </section>
  )
}

export default Layout