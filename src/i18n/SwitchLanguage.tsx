import React, { useContext } from 'react'
import { injectIntl } from 'react-intl'

import { InjectIntlComponentProps } from '../models/i18n/injectIntl'
import LanguageContext from './LanguageContext'
import { languages } from './locales'

const Language = ({ intl }: InjectIntlComponentProps) => {
  const { locale, handleLanguageChange } = useContext(LanguageContext)

  return (
    <select value={locale} onChange={handleLanguageChange}>
      {languages.map(({ value }) => (
        <option key={value} value={value}>
          {intl.formatMessage({ id: `lang_${value}` })}
        </option>
      ))}
    </select>
  )
}

export default injectIntl(Language)
