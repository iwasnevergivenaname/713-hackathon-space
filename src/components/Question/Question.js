import React from "react"
import './Question.css'
import logo from "./logo.png"
import play from "./play.png"
import moon from "./moon.png"
import rocket from "./rocket.png"
import venus from './venus.png'
import earth from './earth.png'
import mars from './mars.png'
import marstxt from './marstxt.png'
import q1 from './q001.png'

function Question() {
  const answerClick = (className) => {
    console.log(className)
  }
  return (
    <div>
      <div className='play'>
        <img src={play} alt="play"/>
      </div>
      <div className='logo'>
        <a href="../"><img src={logo} alt="logo"/></a>
      </div>
      <div className='q1'>
        <img src={q1} alt="q1"/>
      </div>
      <div className='one' onClick={answerClick}>
        <img src={venus} alt="venus"/>
      </div>
      <div className='two' onClick={answerClick}>
        <img src={earth} alt="earth"/>
      </div>
      <div className='three' onClick={answerClick}>
        <img src={mars} alt="mars"/>
        <img src={marstxt} alt=""/>
      </div>
      <div className='moon'>
        <img src={moon} alt="moon"/>
      </div>
      <div className='rocket'>
        <img src={rocket} alt="rocket"/>
      </div>
    </div>
  )
}

export default Question