import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { LinkProps } from '../models/i18n/LinkProps'
import LanguageContext from './LanguageContext'

export default (props: LinkProps) => {
  const { locale, baseLocale } = useContext(LanguageContext)
  const path: string = locale === baseLocale ? props.to : `${locale}${props.to}`

  return <Link {...props} to={path} />
}
