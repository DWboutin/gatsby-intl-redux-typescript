import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import applicationReducer, {
  INITIAL_STATE as applicationInitialState
} from './application/applicationReducer'

console.log('applicationInitialState', applicationInitialState)
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

const initialState = {
  application: applicationInitialState
}

const reducers = combineReducers({
  application: applicationReducer
})

const store = createStore(
  reducers,
  initialState,
  devToolsEnhancer({
    name: 'Starter'
  })
)

export { store }
