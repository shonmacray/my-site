import React from "react"
import Button from "./button"

export default function Hero() {
  return (
    <div className="hero">
      <div className="p70">
        <div className="q4">
          <h1>
            Hello, I am Shon, A creative ReactJS and React Native Rockstar
            Developer
          </h1>
          <p>
            With 3+ years of experience writing react apps, Proficient in
            TypeScript and Learning Gatsby
          </p>
        </div>
        <div>
          <Button>Contact Me</Button>
        </div>
      </div>
    </div>
  )
}
