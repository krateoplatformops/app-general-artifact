import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
// import {
//   watchAdmin,
//   watchAuth,
//   watchDashboard,
//   watchHistory,
//   watchInsight,
//   watchLog,
//   watchPipeline,
//   watchProject,
//   watchUser
// } from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

// sagaMiddleware.run(watchAuth)
// sagaMiddleware.run(watchDashboard)
// sagaMiddleware.run(watchProject)
// sagaMiddleware.run(watchPipeline)
// sagaMiddleware.run(watchLog)
// sagaMiddleware.run(watchInsight)
// sagaMiddleware.run(watchHistory)
// sagaMiddleware.run(watchUser)
// sagaMiddleware.run(watchAdmin)
