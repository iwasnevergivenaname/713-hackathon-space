import React from "react"
import planet from "./planet.png"
import "./App.css"
import TopNav from "./components/TopNav/TopNav"

function App() {
  return (
    <div className="App">
      <TopNav/>
      <header className="App-header">
        <img src={planet} className="App-logo" alt="logo"/>
        <p>
          a space themed hackathon project from 713
        </p>
      </header>
    </div>
  )
}

export default App
