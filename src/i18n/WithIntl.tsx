import { navigate } from 'gatsby'
import React from 'react'
import { IntlProvider } from 'react-intl'

import { WithIntlProps, WithIntlState } from '../models/i18n/WithIntl'
import LanguageContext from './LanguageContext'
import { messages } from './locales'
import stripLanguageFromUrl from './stripLanguageFromUrl'

class WithIntl extends React.PureComponent<WithIntlProps, WithIntlState> {
  constructor(props: WithIntlProps) {
    super(props)

    this.state = {
      locale: props.pageContext.locale || props.baseLanguage
    }

    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  handleLanguageChange(_event: React.ChangeEvent<any>): void {
    const { value } = _event.target
    const { pathname } = this.props.location
    const strippedPathname = stripLanguageFromUrl(pathname)
    const redirectPath =
      this.props.baseLanguage === value
        ? strippedPathname
        : `/${value}${strippedPathname}`

    this.setState(
      {
        locale: value
      },
      () => {
        localStorage.setItem('language', value)
        navigate(redirectPath)
      }
    )
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{
          locale: this.state.locale,
          baseLocale: this.props.baseLanguage,
          handleLanguageChange: this.handleLanguageChange
        }}
      >
        <IntlProvider
          locale={this.state.locale}
          messages={messages[this.state.locale]}
        >
          {React.cloneElement(this.props.children, this.props)}
        </IntlProvider>
      </LanguageContext.Provider>
    )
  }
}

export default WithIntl
