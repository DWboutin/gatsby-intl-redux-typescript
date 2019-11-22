import { ApplicationState } from './application/application'
import { LocalState } from './local/local'

export interface RootState {
  application: ApplicationState
  local: LocalState
}
