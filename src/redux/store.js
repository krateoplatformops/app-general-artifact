import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {
  watchAuth,
  watchConfig,
  watchDeployment,
  watchProxy,
  watchRegister,
  watchSocket,
  watchTemplate,
  watchUser,
  watchEndpoint,
  watchPlugin,
  watchLog,
  watchDashboard,
  watchPkg,
  watchComponent,
  watchSecret,
  watchCatalog
} from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(watchConfig)
sagaMiddleware.run(watchUser)
sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchRegister)
sagaMiddleware.run(watchSocket)
sagaMiddleware.run(watchTemplate)
sagaMiddleware.run(watchDeployment)
sagaMiddleware.run(watchProxy)
sagaMiddleware.run(watchEndpoint)
sagaMiddleware.run(watchPlugin)
sagaMiddleware.run(watchLog)
sagaMiddleware.run(watchDashboard)
sagaMiddleware.run(watchPkg)
sagaMiddleware.run(watchComponent)
sagaMiddleware.run(watchSecret)
sagaMiddleware.run(watchCatalog)
