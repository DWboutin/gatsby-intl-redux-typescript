import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { SwitchLanguage } from '../i18n'

const Header = props => {
  const siteTitle: string = props.siteTitle

  return (
    <div>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <SwitchLanguage />
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
