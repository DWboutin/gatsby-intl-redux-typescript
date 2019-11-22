import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { RootState } from '../models/store'
import applicationReducer, {
  INITIAL_STATE as applicationInitialState
} from './application/application'
import localReducer, {
  INITIAL_STATE as localInitialState,
  localEpics
} from './local/local'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

const epicMiddleware = createEpicMiddleware()
const rootEpic = combineEpics(localEpics.saveEpic)

const initialState: RootState = {
  application: applicationInitialState,
  local: localInitialState
}

const reducers = combineReducers({
  application: applicationReducer,
  local: localReducer
})

const store: Store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(epicMiddleware))
)
epicMiddleware.run(rootEpic)

export { store }
