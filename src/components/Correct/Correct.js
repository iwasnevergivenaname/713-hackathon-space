import React, {useEffect} from "react"
import './Correct.css'
import bluecenti from './bluecenti.png'
import bluesquid from './bluesquid.png'
import correct from './correct.png'
import fire from './fire.png'
import greenocto from './greenocto.png'
import greenoneeoe from './greenoneeye.png'
import logo from './logo (2).png'
import moon from './moon.png'
import orangedoof from './orangedoof.png'
import play from './play (1).png'
import redhorn from './redhorn.png'
import yellowhorn from './yellowhorn.png'

let aliens = [bluecenti, bluesquid, greenocto, greenoneeoe, orangedoof, redhorn, yellowhorn]

const Correct = (props) => {
  let randomNumOne = Math.floor(Math.random() * aliens.length)
  let randomNumTwo = Math.floor(Math.random() * aliens.length)
  let randomNumThree = Math.floor(Math.random() * aliens.length)

  function randomAlien(num){
    if (num === 1) {
      return bluecenti
    } else if (num === 2) {
      return bluesquid
    } else if (num === 3) {
      return greenocto
    } else if (num === 4) {
      return greenoneeoe
    } else if (num === 5) {
      return orangedoof
    } else if (num === 6) {
      return redhorn
    } else {
      return yellowhorn
    }
  }
  useEffect(() =>{
    setTimeout(() =>props.history.push('/play'), (5000))
})

  return (
    <>
      <div className='star'>
        <a href="../play"><img src={play} alt="star"/></a>
      </div>
      <div className='logo'>
        <a href="../"><img src={logo} alt="logo"/></a>
      </div>
      <div className='fire'>
        <img src={fire} alt="fire"/>
      </div>
      <div className='correct'>
        <img src={correct} alt="correct"/>
      </div>
      <div className='correct-page-moon'>
        <img src={moon} alt="moon"/>
      </div>
      <div className='first'>
        <img src={randomAlien(randomNumOne)} alt=""/>
      </div>
      <div className='second'>
        <img src={randomAlien(randomNumTwo)} alt=""/>
      </div>
      <div className='third'>
        <img src={randomAlien(randomNumThree)} alt=""/>
      </div>

    </>
  )
}

export default Correct