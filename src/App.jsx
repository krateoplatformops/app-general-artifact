import React, { Suspense, lazy } from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import history from './history'
import { store } from './redux/store'

import Layout from './components/Containers/Layout/Layout'
// import AuthLayout from './components/Containers/AuthLayout/AuthLayout'
import PageLoader from './components/UI/PageLoader/PageLoader'

/* MOMENT */
import moment from 'moment-timezone'
import UserProvider from './components/Context/UserContext'
moment.tz.setDefault('UTC')

const LoginLazy = lazy(() => import('./components/Pages/Login/Login'))
const NotFoundLazy = lazy(() => import('./components/Pages/NotFound/NotFound'))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <UserProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<LoginLazy />} />
                {/* <Route element={<AuthLayout />}>
                  <Route path='dashboard' element={<DashboardLazy />} />
                  <Route path='projects/' element={<ProjectsLazy />} />
                  <Route
                    path='projects/edit/:provider/:id'
                    element={<EditProjectLazy />}
                  />
                  <Route path='projects/*' element={<NewProjectLazy />} />
                  <Route path='insights' element={<InsightsLazy />} />
                  <Route path='logs' element={<LogsLazy />} />
                  <Route path='history' element={<HistoryLazy />} />
                  <Route path='users' element={<UsersLazy />} />
                  <Route path='users/edit/:id' element={<EditUserLazy />} />
                  <Route path='settings' element={<SettingsLazy />} />
                </Route> */}
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
