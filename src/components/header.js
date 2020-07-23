import PropTypes from "prop-types"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = ({ siteTitle }) => (
  <div className="header" id="header">
    <div className="colors" />
    <div className="p10">
      {/* Logo */}
      <div className="p11">
        <h4
          className="m1 point"
          onClick={() => scrollTo("#project")}
        >
          Projects
        </h4>
        <h3
          onClick={() => window.open("https://github.com/shonmacray", "_blank")}
          className="point"
        >
          Github
        </h3>
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
