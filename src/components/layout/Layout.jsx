import React from "react"
import Headers from "./header/Headers"

const Layout = ({children}) => {
  return (
    <div>
        <Headers/>
        {children}
    </div>
  )
}

export default Layout