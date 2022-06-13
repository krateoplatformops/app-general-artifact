import React from 'react'

import Label from '../../../../UI/Label/Label'
import InputPassword from '../../../../UI/InputPassword/InputPassword'

const Basic = ({ register }) => (
  <React.Fragment>
    <Label title='username'>
      <input
        type='text'
        placeholder='Username'
        {...register('username', {
          required: true
        })}
      />
    </Label>
    <Label title='password'>
      <InputPassword
        register={register}
        name='password'
        placeholder='Password'
      />
    </Label>
  </React.Fragment>
)

export default Basic
