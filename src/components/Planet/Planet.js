import React, {useState, useEffect} from "react"
import './Planet.css'
import logo from './logo.png'
import play from './play.png'
import rectangle from './Rectangle 12.png'
import mercuryBig from './mercurybig.png'
import mercurySmall from './mercurysmall.png'
import mercuryTxt from './Mercurytxt.png'
import venusSmall from './venusmall.png'
import venusBig from './sqvenus.png'
import venusTxt from './venustextokay.png'
import venusFacts from './venusfacts.png'
import earthBig from './earth.png'
import earthSmall from './earthsmall.png'
import earthTxt from './Earthtxt.png'
import earthFacts from './earthfacts.png'
import marsSmall from './mars003.png'
import marsBig from './sqmars.png'
import marsTxt from './Marstxt.png'
import marsFacts from './marsfacts.png'
import jupiterBig from './jupiter.png'
import jupiterSmall from './jupiter.png'
import jupiterTxt from './Jupitertxt.png'
import astronaut from './astronaut.png'
import moon from './moon.png'

class Planet {
  constructor(name, big, small, txt, facts) {
    this.name = name;
    this.big = big;
    this.small = small;
    this.txt = txt;
    this.facts = facts;

  }
}

let Mercury = new Planet('mercury', mercuryBig, mercurySmall, mercuryTxt, ["Mercury has an orbit around the Sun of 87.97 days",
  "Mercury is the smallest and inner most planet"])

let Venus = new Planet('venus', venusBig, venusSmall, venusTxt, venusFacts)

let Earth = new Planet('earth', earthBig, earthSmall, earthTxt, earthFacts)

let Mars = new Planet('mars', marsBig, marsSmall, marsTxt, marsFacts)

let Jupiter = new Planet('jupiter', jupiterBig, jupiterSmall, jupiterTxt, ['Jupiter is the fastest spinning planet',
  'Jupiter cannot become a star'])
//
// let Saturn = new Planet('saturn', saturn, ['Saturn is a gas giant', 'Saturn is 95x more massive'])
//
// let Neptune = new Planet('neptune', neptune, ['Neptune is furthest from the sun',
//   'Neptune is the smallest gas giant'])


export default function PlanetPage() {
  let [leftPhoto, setLeftPhoto] = useState(Venus.small)
  let [mainPhoto, setMainPhoto] = useState(Earth.big)
  let [rightPhoto, setRightPhoto] = useState(Mars.small)

  let [leftText, setLeftText] = useState(Venus.txt)
  let [mainText, setMainText] = useState(Earth.txt)
  let [rightText, setRightText] = useState(Mars.txt)

  let [facts, setFacts] = useState(Earth.facts)

  let [leftAlt, setLeftAlt] = useState(Venus.name)
  let [rightAlt, setRightAlt] = useState(Mars.name)

  let [isOpened, setIsOpened] = useState(false)


  const planetSwitch = (e) => {
    if (e.target.alt === 'mars') {
      setLeftPhoto(Earth.small)
      setLeftText(Earth.txt)
      setLeftAlt(Earth.name)
      setMainPhoto(Mars.big)
      setMainText(Mars.txt)
      setFacts(Mars.facts)
      setRightPhoto(Jupiter.small)
      setRightText(Jupiter.txt)
      setRightAlt(Jupiter.alt)
      setIsOpened({isOpened: !isOpened})
      console.log('clicked mars')
    } else if (e.target.alt === 'venus') {
      setLeftPhoto(Mercury.small)
      setLeftText(Mercury.txt)
      setLeftAlt(Mercury.name)
      setMainPhoto(Venus.big)
      setMainText(Venus.txt)
      setFacts(Venus.facts)
      setRightPhoto(Earth.small)
      setRightText(Earth.txt)
      setRightAlt(Earth.name)
      setIsOpened({isOpened: !isOpened})
      console.log('clicked venus')
    } else if (e.target.alt === 'earth') {
      setLeftPhoto(Venus.small)
      setLeftText(Venus.txt)
      setLeftAlt(Venus.alt)
      setMainPhoto(Earth.big)
      setMainText(Earth.txt)
      setFacts(Earth.facts)
      setRightPhoto(Mars.small)
      setRightText(Mars.txt)
      setRightAlt(Mars.alt)
      setIsOpened({isOpened: !isOpened})
      console.log('clicked earth')
    }
  }



  return (
    <>
      <div className='star'>
        <a href="/play"><img src={play} alt="star" className='starimg'/></a>
      </div>
      <div className='planet-page-logo'>
        <a href="../"><img src={logo} alt="logo"/></a>
      </div>
      <div className='left-planet' onClick={planetSwitch}>
        <img src={leftPhoto} alt={leftAlt}/>
      </div>
      <div className='lefttext'>
        <img src={leftText} alt={leftAlt}/>
      </div>
      <div className='main-planet'>
        <img src={mainPhoto} alt="planet"/>
      </div>
      <div className='textshadow'>
        <img src={rectangle} alt="text shadow"/>
      </div>
      <div className='maintext'>
        <img src={mainText} alt="main photo"/>
      </div>
      <div className='right-planet' onClick={planetSwitch}>
        <img src={rightPhoto} alt={rightAlt}/>
      </div>
      <div className='facts'>
        <img src={facts} alt="facts"/>
      </div>
      <div className='righttext'>
        <img src={rightText} alt={rightAlt}/>
      </div>
      <div className='planet-page-moon'>
        <img src={moon} alt="moon"/>
      </div>
      <div className='guy'>
        <img src={astronaut} alt="astronaut"/>
      </div>
    </>
  )
}
