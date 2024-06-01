import React from 'react'
import Layout from '../../layout/Layout'
import { useForm } from 'react-hook-form'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

const Auth = () => {
 
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'onChange'
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout heading='Sign in' bgImage='/images/auth-bg.png'>
      <div className="wrapper-inner-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
          error={errors?.email?.message}
          name='email'
          register={register}
          options={
            {...register('email', {
              required: 'Email is Required'
            })}
          }
          type="text" 
          placeholder='Enter email' 
          />
          <Button>Let's Go</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Auth