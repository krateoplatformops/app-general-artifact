import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import packageJson from '../../../../package.json'
import css from './Login.module.scss'
import Actions from './Actions/Actions'
import KrateoLogo from '../../UI/KrateoLogo/KrateoLogo'
import Social from './Social/Social'
import Logo from '../../../assets/krateo/dark/logo_vertical.svg'
import Auth from './Auth/Auth'

const Login = ({ strategy }) => (
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
                  {(strategy.list || []).map((p) => (
                    <li key={p.metadata.uid}>
                      <Actions provider={p} />
                    </li>
                  ))}
                </ul>
              }
            />
            <Route
              path='/*'
              element={<Auth providers={strategy.list || []} />}
            />
          </Route>
        </Routes>
      </div>
      <KrateoLogo css={css.SmallLogo} />
      <span className={css.Version}>v. {packageJson.version}</span>
    </li>
  </ul>
)

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Login)
