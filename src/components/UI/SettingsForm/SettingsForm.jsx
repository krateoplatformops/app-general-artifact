import React, { useEffect } from 'react'

import Label from '../Label/Label'
import InputPassword from '../InputPassword/InputPassword'

const SettingsForm = ({ fields, register, setValue }) => {
  useEffect(() => {
    fields.forEach((f) => {
      if (f.default) {
        setValue(f.name, f.default)
      }
    })
  }, [fields, setValue])

  return (
    <React.Fragment>
      {fields.map((f) => {
        return (
          <Label key={f.name} title={f.title} description={f.description}>
            {f.type === 'password' ? (
              <InputPassword
                register={register}
                name={f.name}
                placeholder={f.title}
                required={f.required}
              />
            ) : (
              <input
                type={f.type}
                placeholder={f.title}
                {...register(f.name, {
                  required: f.required || false
                })}
              />
            )}
          </Label>
        )
      })}
    </React.Fragment>
  )
}

export default SettingsForm
