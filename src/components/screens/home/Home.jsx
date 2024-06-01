import React from 'react'
import '../../../assets/styles/index.scss'
import Layout from '../../layout/Layout'
import { useNavigate, useNavigation } from 'react-router-dom'
import Button from '../../ui/button/Button'

function Home() {

  const navigate = useNavigate()

  return (
    <Layout bgImage='/images/home-bg.jpg'>
      <Button clickHandler={()=> navigate('/new-workout')}>
        New
      </Button>
      <h1 className={s.heading}>
        EXERCISES FOR THE SHOULDERS
      </h1>
    </Layout>
  )
}

export default Home
