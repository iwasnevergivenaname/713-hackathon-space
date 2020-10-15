import React from "react"

function Question() {
  const answerClick = (className) => {
    console.log(className)
  }
  return (
    <div>
      <p>question: what is our planet?</p>
      <div className='answer-one' onClick={answerClick}><p>
        mars
      </p></div>
      <div className='answer-two' onClick={answerClick}><p>
        earth
      </p></div>
      <div className='answer-three' onClick={answerClick}><p>
        pluto
      </p></div>
      <div className='answer-four' onClick={answerClick}><p>
        brushing his teeth
      </p></div>
    </div>
  )
}

export default Question