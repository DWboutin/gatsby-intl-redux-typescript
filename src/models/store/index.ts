import { ApplicationState } from './application/application'
import { LocalState } from './local/local'
import { RequestState } from './request/request'

export interface RootState {
  application: ApplicationState
  local: LocalState
  request: RequestState
}
