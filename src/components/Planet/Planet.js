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
import rectangle from './Rectangle 12.png'


export default function Planet() {

  const planetSwitch = (planet) => {
    if (planet.value.target === 'earth') {

    }
  }

  return (
    <>
      <div className='star'>
        <a href="/play"><img src={play} alt="star" className='starimg'/></a>
      </div>
      <div className='logo'>
        <a href="../"><img src={logo} alt="logo"/></a>
      </div>
      <div className='left-planet'>
        <img src={venus} alt=""/>
      </div>
      <div className='venustext'>
        <img src={venustext} alt="venus text"/>
      </div>
      <div className='main-planet'>
        <img src={earth} alt="earth"/>
      </div>
      <div className='textshadow'>
        <img src={rectangle} alt="text shadow"/>
      </div>
      <div className='right-planet'>
        <img src={mars} alt="mars"/>
      </div>
      <div className='marstext'>
        <img src={marstext} alt="mars text"/>
      </div>
      <div className='guy'>
        <img src={astronaut} alt="astronaut"/>
      </div>
      <div className='moon'>
        <img src={moon} alt="moon"/>
      </div>
    </>
  )
}
