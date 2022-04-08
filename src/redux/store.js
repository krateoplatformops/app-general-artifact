import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {
  watchAuth,
  watchConfig,
  watchDeployment,
  watchRegister,
  watchSocket,
  watchTemplate,
  watchUser
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
