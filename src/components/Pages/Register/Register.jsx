import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Card from '../../UI/Card/Card'
import Label from '../../UI/Label/Label'
import { registerImport } from '../../../redux/actions'
// import css from './Register.module.scss'

const Register = () => {
  const dispatch = useDispatch()
  const [url, setUrl] = useState('')

  const handleSubmit = () => {
    dispatch(registerImport({ url }))
  }

  return (
    <React.Fragment>
      <Card title='Register component'>
        <Label
          title={'Full Url'}
          description={'Enter the full path of the file you want to register.'}
        >
          <input
            type='text'
            placeholder='full Url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Label>
        <div className='submit-single-container'>
          <button
            className='primary-button'
            disabled={url === ''}
            onClick={handleSubmit}
          >
            register
          </button>
        </div>
      </Card>
    </React.Fragment>
  )
}

export default Register
