import React from "react"

export default function Light({ color = "orange" }) {
  return <span className={`light ${color}`} />
}
