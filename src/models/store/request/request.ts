import { AnyAction } from 'redux'

export interface RequestState {
  [data: string]: RequestStatus
}

export interface RequestStatus {
  isPristine: boolean
  isLoading: boolean
  isFailed: boolean
}

export enum StatusEffect {
  REQUESTED,
  LOADED,
  FAILED
}

export interface RequestAction extends AnyAction {
  effect: StatusEffect
  data: string
}
