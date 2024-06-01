import React from 'react'
import {
    Route,
    Routes,
    BrowserRouter,
  } from "react-router-dom";
import NotFound from '../components/screens/not-found/NotFound';
import { routes } from './routes.data';
import { useAuth } from '../hooks/useAuth';
  
  const Router = () => {

    const {isAuth} = useAuth()

    return (
      <BrowserRouter>
        <Routes>
          {
              routes.map(t => {

                    if(t.isAuth && !isAuth) {
                      return false
                    }

                    return(
                        <Route 
                        key={t.path} 
                        path={t.path} 
                        element={<t.component />} 
                        />
                    )
              })
          }
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router