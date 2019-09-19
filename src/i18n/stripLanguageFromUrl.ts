import { Language } from '../models/i18n/Language'
import { languages } from './locales'

export default (url: string): string => {
  const langArray = languages.map((language: Language) => language.value)
  const langRegex = new RegExp('/' + langArray.join('/|/') + '/')

  return url.replace(langRegex, '')
}
