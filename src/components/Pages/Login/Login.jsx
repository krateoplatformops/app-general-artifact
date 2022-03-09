import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import packageJson from '../../../../package.json'
import css from './Login.module.scss'
import { configLoad } from '../../../redux/actions'
import Oauth from './Oauth/Oauth'
import PageLoader from '../../UI/PageLoader/PageLoader'
import KrateoLogo from '../../UI/KrateoLogo/KrateoLogo'
import Social from './Social/Social'
import Support from './Support/Support'
import { uiConstants } from '../../../constants'

const Login = ({ config }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(configLoad())
  }, [dispatch])

  return (
    <React.Fragment>
      <Social />
      <div className={css.LoginContainer}>
        <KrateoLogo css={css.BigLogo} file={uiConstants.logo.horizontal} />

        <ul className={css.UlProviders}>
          {(config.settings.strategies || []).map((p) => (
            <li key={p._id}>
              <Oauth provider={p} />
            </li>
          ))}
        </ul>
        <KrateoLogo css={css.SmallLogo} />
        <span className={css.Version}>v. {packageJson.version}</span>
      </div>
      <Support />
      {config.loading && <PageLoader />}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Login)
