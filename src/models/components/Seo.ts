import { HelmetProps } from 'react-helmet'

export interface SeoProps extends HelmetProps {
  description?: string
  lang: string
  keywords: Array<string>
}
