import produce from 'immer'

import {
  RequestAction,
  RequestState,
  StatusEffect
} from '../../models/store/request/request'

export const INITIAL_STATE: RequestState = {}

export default produce((draft: RequestState, action: RequestAction) => {
  const key = action.data
  if (!key) return
  if (!draft[key]) {
    draft[key] = {
      isPristine: true,
      isLoading: false,
      isFailed: false
    }
  }

  switch (action.effect) {
    case StatusEffect.REQUESTED:
      draft[key] = {
        isPristine: draft[key].isPristine,
        isLoading: true,
        isFailed: false
      }
      break
    case StatusEffect.LOADED:
      draft[key] = {
        isPristine: false,
        isLoading: false,
        isFailed: false
      }
      break
    case StatusEffect.FAILED:
      draft[key] = {
        isPristine: false,
        isLoading: false,
        isFailed: true
      }
      break
    default:
      break
  }
}, INITIAL_STATE)
