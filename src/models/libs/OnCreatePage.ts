import { Actions } from 'gatsby'

export interface OnCreatePageArg {
  actions: Actions
  page: OnCreatePageArgPage
}

export interface OnCreatePageArgPage {
  path: string
  component: string
}
