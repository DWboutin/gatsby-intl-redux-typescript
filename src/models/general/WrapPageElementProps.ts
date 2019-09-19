import { NavigateFn } from '@reach/router'

import { PageContext } from './PagesDefinition'

export interface WrapPageElementProps {
  children: JSX.Element
  pageContext: PageContext
  pathContext: PageContext
  location: Location
  navigate: NavigateFn
  path: string
  uri: string
}
