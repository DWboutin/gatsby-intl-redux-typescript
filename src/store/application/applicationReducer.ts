import { produce } from 'immer'
import { AnyAction } from 'redux'

import { ApplicationState } from '../../models/store/application/application'
import { ApplicationActions } from './applicationActions'

export const INITIAL_STATE: ApplicationState = {
  locale: 'en'
}

export default produce((draft: ApplicationState, action: AnyAction) => {
  switch (action.type) {
    case ApplicationActions.APP_CHANGE_LOCALE:
      draft.locale = action.payload
  }
}, INITIAL_STATE)
