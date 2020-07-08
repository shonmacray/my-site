import React from "react"
import Button from "./button"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Project() {
  return (
    <div className="project" id="project">
      <div className="p13">
        <h3>Projects d</h3>
        <h3>Kbab</h3>
      </div>
      <div className="q1">
        <p>Oops project under development</p>
        <Button onClick={() => scrollTo("#header")}>Back to up</Button>
      </div>
    </div>
  )
}
