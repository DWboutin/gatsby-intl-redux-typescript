import { produce } from 'immer'
import { AnyAction } from 'redux'

import { ApplicationState } from '../../models/store/application/application'

export class ApplicationActions {
  static APP_CHANGE_LOCALE = 'APP_CHANGE_LOCALE'

  public static changeLocale(locale: string): AnyAction {
    return {
      type: ApplicationActions.APP_CHANGE_LOCALE,
      payload: locale
    }
  }
}

export const INITIAL_STATE: ApplicationState = {
  locale: 'en'
}

export default produce((draft: ApplicationState, action: AnyAction) => {
  switch (action.type) {
    case ApplicationActions.APP_CHANGE_LOCALE:
      draft.locale = action.payload
  }
}, INITIAL_STATE)
