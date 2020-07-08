import React from "react"

export default function Button({ children, onClick, color = "default" }) {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {children}
    </button>
  )
}
