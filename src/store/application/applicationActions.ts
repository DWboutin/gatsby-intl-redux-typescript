import { AnyAction } from 'redux'

export class ApplicationActions {
  static APP_CHANGE_LOCALE = 'APP_CHANGE_LOCALE'

  changeLocale(locale: string): AnyAction {
    return {
      type: ApplicationActions.APP_CHANGE_LOCALE,
      payload: locale
    }
  }
}
