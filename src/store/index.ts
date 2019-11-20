import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { RootState } from '../models/store'
import applicationReducer, {
  INITIAL_STATE as applicationInitialState
} from './application/applicationReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

const epicMiddleware = createEpicMiddleware()
const rootEpic = combineEpics()

const initialState: RootState = {
  application: applicationInitialState
}

const reducers = combineReducers({
  application: applicationReducer
})

const store: Store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(epicMiddleware))
)
epicMiddleware.run(rootEpic)

export { store }
