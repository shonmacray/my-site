import React from "react"
import Button from "./button"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import Light from "./light"

export default function Project() {
  return (
    <div className="project" id="project">
      <div className="p13">
        <h3 style={{ fontFamily: `lato`, marginRight: `1rem` }}>
          Projects <Light />
        </h3>
        <h3 style={{ fontFamily: `lato` }}>Kbab</h3>
      </div>
      <div className="q1">
        <p className="dev">Oops project under development</p>
        <Button color="lime" onClick={() => scrollTo("#header")}>
          Back to up <FontAwesomeIcon icon="chevron-up" />
        </Button>
      </div>
    </div>
  )
}
