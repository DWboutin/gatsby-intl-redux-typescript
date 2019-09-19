import React from 'react'

export interface LanguageContextValues {
  locale: string
  baseLocale: string
  handleLanguageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
