import React, { Suspense, lazy } from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import history from './history'
import { store } from './redux/store'

import Layout from './components/Containers/Layout/Layout'
import AuthLayout from './components/Containers/AuthLayout/AuthLayout'
import PageLoader from './components/UI/PageLoader/PageLoader'

/* MOMENT */
import moment from 'moment-timezone'
import UserProvider from './components/Context/UserContext'
moment.tz.setDefault('UTC')

const LoginLazy = lazy(() => import('./components/Pages/Login/Login'))
const NotFoundLazy = lazy(() => import('./components/Pages/NotFound/NotFound'))
const DashboardLazy = lazy(() =>
  import('./components/Pages/Dashboard/Dashboard')
)
const TemplatesLazy = lazy(() =>
  import('./components/Pages/Templates/Templates')
)
const RegisterLazy = lazy(() => import('./components/Pages/Register/Register'))
const DeploymentsLazy = lazy(() =>
  import('./components/Pages/Deployments/Deployments')
)
const SettingsLazy = lazy(() => import('./components/Pages/Settings/Settings'))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <UserProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<LoginLazy />} />
                <Route element={<AuthLayout />}>
                  <Route path='dashboard' element={<DashboardLazy />} />
                  <Route path='deployments/*' element={<DeploymentsLazy />} />
                  <Route path='templates/*' element={<TemplatesLazy />} />
                  <Route path='register' element={<RegisterLazy />} />
                  <Route path='settings/*' element={<SettingsLazy />} />
                </Route>
                <Route path='*' element={<NotFoundLazy history={history} />} />
              </Route>
            </Routes>
          </UserProvider>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App
