import React from "react"
import planet from "../../planet.png"

function Home() {
  return (
    <header className="App-header">
      <img src={planet} className="App-logo" alt="logo"/>
      <p>
        a space themed hackathon project from 713
      </p>
    </header>
  )
}

export default Home