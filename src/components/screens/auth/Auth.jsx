import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { useForm } from 'react-hook-form'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/Loader'
import s from './Auth.module.scss'
import AuthService from '../../../services/auth.service'
import { useMutation } from '@tanstack/react-query'

const Auth = () => {

  const [type, setType] = useState('login')
 
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  })

  const {mutate, isLoading} = useMutation(['auth'], ({email, password}) =>
    AuthService.main(email, password, type), {
    onSuccess: data => {
      alert('success')
    }
  })

  function onSubmit(data) {
    mutate(data)
  }

  return (
    <>
      <Layout heading='Sign in' bgImage='/images/auth-bg.png'/>
        <div className="wrapper-inner-page">
          {isLoading  && <Loader/>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              error={errors?.email?.message}
              name='email'
              register={register}
              options={{
                required: 'Email is Required'
              }}
              type="text" 
              placeholder='Enter email' 
            />
            <Field
              error={errors?.password?.message}
              name='password'
              register={register}
              options={{
                required: 'Password is Required'
              }}
              type="text" 
              placeholder='Enter password' 
            />
            <div className={s.wrapperButtons}>
              <Button clickHandler={()=> {setType('auth')}}>Sign in</Button>
              <Button clickHandler={()=> {setType('reg')}}>Sign up</Button>
            </div>
          </form>
        </div>
      </>
  )
}

export default Auth
