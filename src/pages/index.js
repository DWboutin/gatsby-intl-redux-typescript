import React from 'react'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const IndexPage = ({ pageContext }) => (
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
