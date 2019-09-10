import { AnyAction } from 'redux'

import { ApplicationActions } from './applicationActions'

export const INITIAL_STATE = {
  locale: 'en'
}

export default function applicationReducer(
  lastState: any = INITIAL_STATE,
  action: AnyAction
) {
  switch (action.type) {
    case ApplicationActions.APP_CHANGE_LOCALE:
      return {
        ...lastState,
        locale: action.payload
      }

    default:
      return lastState
  }
}
