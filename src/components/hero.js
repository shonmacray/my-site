import React from "react"
import Button from "./button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

export default function Hero() {
  return (
    <div className="hero">
      <div className="p70">
        <div className="q4">
          <h1 className="about">
            I am a Front-end ReactJs and React Native rockstar developer
          </h1>
          <p className="c1" style={{ fontFamily: `lato` }}>
            With 3+ years of experience writing react apps, Proficient in
            TypeScript and Learning Gatsby
          </p>
        </div>
        <div>
          <Button
            onClick={() =>
              window.open("https://twitter.com/chaos_ao", "_blank")
            }
          >
            Contact Me <FontAwesomeIcon icon="chevron-right" />
          </Button>
        </div>
      </div>
    </div>
  )
}
