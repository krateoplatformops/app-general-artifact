import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { watchAuth, watchConfig, watchUser } from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(watchConfig)
sagaMiddleware.run(watchUser)
sagaMiddleware.run(watchAuth)
