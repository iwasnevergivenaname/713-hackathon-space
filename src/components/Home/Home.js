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
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='rocket'>
        <img src={rocket} alt="rocket"/>
      </div>
      <div className='create'>
        <img src={create} alt="create"/>
      </div>
      <div className='learn'>
        <img src={learn} alt="learn"/>
      </div>
      <div className='play'>
        <img src={play} alt=""/>
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