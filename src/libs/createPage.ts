import { languages } from '../i18n/locales'
import { OnCreatePageArg } from '../models/libs/OnCreatePage'

export const onCreatePage = ({ page, actions }: OnCreatePageArg) => {
  const { createPage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  languages.forEach(({ value }) => {
    /**
     * Example for client-side only pages
     * It will keep the last part of the URL when you change language
     
    if (page.path.match(/^\/client-side-page/)) {
      page.matchPath = (value !== baseLanguage) ? `/${value}/client-side-page/*` : '/client-side-page/*';
    }
    */

    const pageLocalePath = value !== 'en' ? `/${value}${page.path}` : page.path
    const localePage = {
      ...page,
      component: page.component,
      originalPath: page.path,
      path: pageLocalePath,
      context: {
        locale: value,
        originalPath: page.path
      }
    }

    createPage(localePage)
  })
}
