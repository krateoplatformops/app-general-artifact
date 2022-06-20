import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import packageJson from '../../../../package.json'
import css from './Login.module.scss'
import { configLoad } from '../../../redux/actions'
import Actions from './Actions/Actions'
import KrateoLogo from '../../UI/KrateoLogo/KrateoLogo'
import Social from './Social/Social'
import Logo from '../../../assets/krateo/dark/logo_vertical.svg'
import Auth from './Auth/Auth'

const Login = ({ config }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!config.init) {
      dispatch(configLoad())
    }
  }, [dispatch, config.init])

  return (
    <ul className={css.UlBody}>
      <li className={css.LiLogo}>
        <img src={Logo} alt='Krateo' />
      </li>
      <li className={css.LiActions}>
        <Social />

        <span className={css.Title}>{window.runConfig.title}</span>
        <div className={css.Card}>
          <Routes>
            <Route path='/'>
              <Route
                index
                element={
                  <ul className={css.UlProviders}>
                    {(config.settings?.providers || []).map((p) => (
                      <li key={p._id}>
                        <Actions provider={p} />
                      </li>
                    ))}
                  </ul>
                }
              />
              <Route
                path='/*'
                element={<Auth providers={config.settings?.providers} />}
              />
            </Route>
          </Routes>
        </div>
        <KrateoLogo css={css.SmallLogo} />
        <span className={css.Version}>v. {packageJson.version}</span>
      </li>
    </ul>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Login)
