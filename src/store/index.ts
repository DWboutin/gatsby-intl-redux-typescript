import { combineReducers, createStore, Store } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { RootState } from '../models/store'
import applicationReducer, {
  INITIAL_STATE as applicationInitialState
} from './application/applicationReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

const initialState: RootState = {
  application: applicationInitialState
}

const reducers = combineReducers({
  application: applicationReducer
})

const store: Store = createStore(
  reducers,
  initialState,
  devToolsEnhancer({
    name: 'Starter'
  })
)

export { store }
