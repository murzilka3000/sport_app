import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/screens/home/Home'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
