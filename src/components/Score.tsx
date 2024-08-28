import React, { useState } from "react"
import "./styles/Score.css" // Make sure to create this CSS file

function Score() {
  const [score, setScore] = useState(12) // Initial score set to 12

  const increaseScore = () => {
    setScore(score + 1)
  }

  const decreaseScore = () => {
    setScore(score - 1)
  }

  return (
    <div className="score-container">
      <button className="score-button" onClick={increaseScore}>
        +
      </button>
      <div className="score-value">{score}</div>
      <button className="score-button" onClick={decreaseScore}>
        -
      </button>
    </div>
  )
}

export default Score
