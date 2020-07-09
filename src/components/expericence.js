import React from "react"
import Button from "./button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import Light from "./light"

export default function Expericence() {
  return (
    <div className="experience">
      <h3 style={{ fontFamily: `lato` }}>
        Work Expericence <Light />
      </h3>
      <div className="p12">
        <div className="q3">
          <img
            className="image"
            alt="image"
            src="https://coda.newjobs.com/api/imagesproxy/ms/cms/content30/images/side-hustle-in-intervew.jpg"
          />
        </div>
        <div className="q2">
          <h3 style={{ fontFamily: `lato` }}>React Developer</h3>
          <p style={{ fontFamily: `lato` }}>Linkle.io (Remote) 2019 -2020</p>
          <Button
            color="blue"
            onClick={() => window.open("https://linkle.io", "_blank")}
          >
            Website <FontAwesomeIcon icon="chevron-right" />
          </Button>
        </div>
      </div>
    </div>
  )
}
