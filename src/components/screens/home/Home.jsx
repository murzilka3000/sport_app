import React from 'react'
import '../../../assets/styles/index.scss'
import Layout from '../../layout/Layout'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import s from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth'

function Home() {

  const navigate = useNavigate()
  const {isAuth} = useAuth()

  return (
    <Layout bgImage='images/home-bg.jpg'>
      <Button clickHandler={()=> navigate(isAuth ? '/new-workout' : '/auth')}>
        {isAuth ? 'New' : 'Sign in'}
      </Button>
      <h1 className={s.heading}>
        EXERCISES FOR THE SHOULDERS
      </h1>
    </Layout>
  )
}

export default Home
