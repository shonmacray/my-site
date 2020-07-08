import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div></div>
    <div className="p10">
      <h2>{siteTitle}</h2>
      <div className="p11">
        <h4>Projects</h4>
        <h3>Github</h3>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
