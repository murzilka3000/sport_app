import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Routes = () => {

    const {isAuth} = useAuth()

    return (
        <div>Routes</div>
    )
}

export default Routes