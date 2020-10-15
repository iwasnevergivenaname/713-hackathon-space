import React, {Component} from "react"
import planet from "./planet.png"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css"
import TopNav from "./components/TopNav/TopNav"
import Planet from "./components/Planet/Planet"
import Home from "./components/Home/Home"
import Question from "./components/Question/Question"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav/>
          <Route exact path="/" component={Home}/>
          <div className="container">
            <Route exact path="/planet" component={Planet}/>
            <Route exact path="/question" component={Question}/>
            {/*<Route exact path="/exercises/:id" component={ExerciseId}/>*/}
            {/*<Route exact path="/playlist/:id" component={PlaylistId}/>*/}
            {/* <NotFoundPage /> */}
          </div>
        </div>
      </Router>
      // <div className="App">
      //   <TopNav/>
      //   <header className="App-header">
      //     <img src={planet} className="App-logo" alt="logo"/>
      //     <p>
      //       a space themed hackathon project from 713
      //     </p>
      //   </header>
      // </div>
    )
  }
}

export default App
