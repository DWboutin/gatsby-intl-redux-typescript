import React from 'react'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { PageContext } from '../models/general/PagesDefinition'

const IndexPage = ({ pageContext }: { pageContext: PageContext }) => (
  <Layout>
    <SEO
      lang={pageContext.locale}
      title="Home"
      keywords={['gatsby', 'application', 'react']}
    />
    <h1>
      <FormattedMessage id="string1" />
    </h1>
  </Layout>
)

export default IndexPage
