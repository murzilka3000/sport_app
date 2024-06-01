import React from 'react'
import './Field.module.scss'
import s from './Field.module.scss'

const Field = ({register, name, options, error, ...rest}) => {
  return (
    <div>
        <input {...register(name, options)} {...rest} className={s.input} />
        {error && <div className={s.error}>{error}</div>}
    </div>
  )
}

export default Field