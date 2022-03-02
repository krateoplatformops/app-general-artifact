import React, { useState } from 'react'
import { connect } from 'react-redux'

import css from './Login.module.scss'
// import Logo from '../../../assets/logo_full.svg'
// import { login } from '../../../redux/actions'
// import ButtonLoader from '../../UI/ButtonLoader/ButtonLoader'
import { uiConstants } from '../../../constants/ui.constants'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const buttonIsDisabled = () => {
    return username.length === 0 || password.length === 0
  }

  const loginButtonHandler = () => {
    if (!props.auth.loading) {
      props.login({
        username,
        password
      })
    }
  }

  const handleKeyUp = (event) => {
    if (
      event.keyCode === 13 &&
      username !== '' &&
      password !== '' &&
      !props.auth.loading
    ) {
      props.login({
        username,
        password
      })
    }
  }

  return (
    <div className={css.LoginContainer}>
      <div className={css.LoginBox}>
        login
        <a
          href={`http://localhost:8080/auth/github?redirect=${window.location.href}`}
        >
          github login
        </a>
        {/* <div className={css.LogoContainer}>
          <img src={Logo} alt='pipem.io' className={css.Logo} />
        </div>
        <label>
          username
          <input
            type='text'
            placeholder={uiConstants.placeholders.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleKeyUp}
          />
        </label>
        <label>
          password
          <input
            type='password'
            placeholder={uiConstants.placeholders.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={handleKeyUp}
          />
        </label>
        <div className='button-container'>
          <button
            className={css.LoginButton}
            disabled={buttonIsDisabled()}
            onClick={loginButtonHandler}
          >
            <ButtonLoader label='Login' loading={props.auth.loading} />
          </button>
        </div> */}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Login)
