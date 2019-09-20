import { WrapPageElementProps } from '../general/WrapPageElementProps'

export interface WithIntlProps extends WrapPageElementProps {
  locale: string
  baseLanguage: string
}

export interface WithIntlState {
  locale: string
}

export interface LanguageContextProps {
  locale: string
  baseLocale: string
  handleLanguageChange(_event: React.ChangeEvent<any>): void
}
