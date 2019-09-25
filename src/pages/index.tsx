import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Button } from '../_components'
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
      <FormattedMessage id="buttons" />
    </h1>
    <Button>Styled button</Button>
    <Button variant="secondary">Styled button</Button>
  </Layout>
)

export default IndexPage
