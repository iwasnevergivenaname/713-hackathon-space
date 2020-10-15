import React from "react"
import './Planet.css'
import logo from './logo.png'
import play from './play.png'
import earth from './earth.png'
import mars from './mars.png'
import marstext from './Marstext.png'
import venus from './venus.png'
import venustext from './venustext.png'
import astronaut from './astronaut.png'
import moon from './moon.png'


export default function Planet() {

  return (
    <>
      <div className='star'>
        <img src={play} alt="star" className='starimg'/>
      </div>
      <div className='logo'>
        <a href="../"><img src={logo} alt="logo"/></a>
      </div>
      <div className='venus'>
        <img src={venus} alt="venus"/>
      </div>
      <div className='venustext'>
        <img src={venustext} alt=""/>
      </div>
      <div className='earth'>
        <img src={earth} alt="earth"/>
      </div>
      <div className='mars'>
        <img src={mars} alt="mars"/>
      </div>
      <div className='marstext'>
        <img src={marstext} alt=""/>
      </div>
      <div className='astronaut'>
        <img src={astronaut} alt=""/>
      </div>
      <div className='moon'>
        <img src={moon} alt="moon"/>
      </div>
    </>
  )
}
