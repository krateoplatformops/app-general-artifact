import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
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
  watchDashboard
} from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

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
