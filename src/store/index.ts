import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { RootState } from '../models/store'
import applicationReducer, {
  INITIAL_STATE as applicationInitialState
} from './application/application'
import localReducer, {
  INITIAL_STATE as localInitialState,
  localEpic
} from './local/local'
import requestReducer, {
  INITIAL_STATE as requestInitialState
} from './request/request'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

const epicMiddleware = createEpicMiddleware()
const rootEpic = combineEpics(localEpic)

const initialState: RootState = {
  application: applicationInitialState,
  local: localInitialState,
  request: requestInitialState
}

const reducers = combineReducers({
  application: applicationReducer,
  local: localReducer,
  request: requestReducer
})

const store: Store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(epicMiddleware))
)
epicMiddleware.run(rootEpic)

export { store }
