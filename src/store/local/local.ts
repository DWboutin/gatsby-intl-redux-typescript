import produce from 'immer'
import { AnyAction } from 'redux'
import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'
import { filter, ignoreElements, tap } from 'rxjs/operators'

import { store } from '..'
import { save } from '../../libs/storage'
import { LocalState } from '../../models/store/local/local'

export class LocalActions {
  static SET_STATE = 'LOCAL_SET_STATE'

  public static setState(state: LocalState): AnyAction {
    return {
      type: LocalActions.SET_STATE,
      payload: state
    }
  }
}

const localEpics = {
  saveEpic: (action$: Observable<AnyAction>) =>
    action$.pipe(
      filter(action => action.type.substring(0, 5) === 'LOCAL'),
      tap(() => {
        save('local-store', store.getState().local)
      }),
      ignoreElements()
    )
}

export const localEpic = combineEpics(...Object.values(localEpics))

export const INITIAL_STATE: LocalState = {}

export default produce((draft: LocalState, action: AnyAction) => {
  switch (action.type) {
    case LocalActions.SET_STATE:
      return action.payload
  }
}, INITIAL_STATE)
