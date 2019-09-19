import React from 'react'
import { injectIntl } from 'react-intl'

import { InjectIntlComponentProps } from '../models/i18n/injectIntl'
import { languages } from './locales'
import { LanguageContext } from './WithIntl'

const Language = ({ intl }: InjectIntlComponentProps) => {
  return (
    <LanguageContext.Consumer>
      {context => (
        <select value={context.locale} onChange={context.handleLanguageChange}>
          {languages.map(({ value }) => (
            <option key={value} value={value}>
              {intl.formatMessage({ id: `lang_${value}` })}
            </option>
          ))}
        </select>
      )}
    </LanguageContext.Consumer>
  )
}

export default injectIntl(Language)
