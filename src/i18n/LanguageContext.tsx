import React from 'react'

import { LanguageContextProps } from '../models/i18n/WithIntl'

const LanguageContext = React.createContext<Partial<LanguageContextProps>>({
  locale: 'en',
  baseLocale: 'en',
  handleLanguageChange: (_event: React.ChangeEvent<any>): void => {}
})

export default LanguageContext
