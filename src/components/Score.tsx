import React, { useState } from "react"
import "./styles/Score.css" // Make sure to create this CSS file

function Score({ score, onUpdateScore }) {
  const [votes, setScore] = useState(score) // Initial score set to 12

  const increaseScore = () => {
    const newScore = votes + 1
    setScore(newScore)
    onUpdateScore(newScore)
  }

  const decreaseScore = () => {
    const newScore = votes - 1
    setScore(newScore)
    onUpdateScore(newScore) // Update the parent data array
  }

  return (
    <div className="score-container">
      <button className="score-button" onClick={increaseScore}>
        +
      </button>
      <div className="score-value">{votes}</div>
      <button className="score-button" onClick={decreaseScore}>
        -
      </button>
    </div>
  )
}

export default Score
