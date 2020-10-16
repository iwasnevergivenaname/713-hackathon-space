import React from "react"
import './Home.css'
import rocket from './rocket.png'
import logo from './logo.png'
import create from './Create.png'
import learn from './learn.png'
import play from './play.png'
import moon from './moon.png'
import astronaut from './astronaut.png'
import speech from './speech.png'
import planet from "../../planet.png"

function Home() {
  return (
    <>
      <div className='front-page-logo'>
        <img src={logo} alt="front page logo"/>
      </div>
      <div className='rocketship'>
        <img src={rocket} alt="rocketship"/>
      </div>
      <div className='create'>
        <img src={create} alt="create"/>
      </div>
      <div className='learn'>
        <a href="/planet"><img src={learn} alt="learn"/></a>
      </div>
      <div className='play-star'>
        <a href="/play"><img src={play} alt="play star"/></a>
      </div>
      <div className='moon'>
        <img src={moon} alt="moon"/>
      </div>
      <div className='speech'>
        <img src={speech} alt="speech"/>
      </div>
      <div className='astronaut'>
        <img src={astronaut} alt="astronaut"/>
      </div>
    </>
  )
}

export default Home