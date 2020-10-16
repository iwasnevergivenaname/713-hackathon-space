import React, {Component} from "react"
// import planet from "./planet.png"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css"
// import Planet from "./components/Planet/Planet"
import Home from "./components/Home/Home"
import Question from "./components/Question/Question"
import Correct from "./components/Correct/Correct"
import PlanetPage from "./components/Planet/Planet"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <div className="container">
            <Route exact path="/learn" component={PlanetPage}/>
            <Route exact path="/play" component={Question}/>
            <Route exact path="/correct" component={Correct}/>
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
