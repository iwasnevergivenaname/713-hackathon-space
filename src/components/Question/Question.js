import React, { useEffect, useState, setState } from "react"
//import RightAnswer from './RightAnswer';
//import WrongAnswer from './WrongAnswer'
import {Redirect} from 'react-router-dom'
import './Question.css'
import logo from "./logo.png"
import play from "./play.png"
import moon from "./moon.png"
import rocket from "./rocket.png"
import venus from './venus.png'
import earth from './earth.png'
import mars from './mars.png'
import saturn from './saturn.png'
import sun from './Sun.png'
import uranus from './uranus.png'
import mercury from './mercury.png'
import neptune from './neptune.png'
import moonsmall from './moonsmall.png'
import q1 from './q001.png'

function Question(props) {

  useEffect(() =>{
    words=defaultWords;
    synonyms=defaultQuestions;
    wordsValues();
    console.log(words)
    console.log(synonyms)
  }, [] )

  const [buttonOne, setButtonOne] = useState([])
  const [buttonTwo, setButtonTwo] = useState([])
  const [buttonThree, setButtonThree] = useState([])
  const [winningValue, setWinningValue] = useState([])
  const [correct, setCorrect] = useState([])
  const [incorrect, setIncorrect] = useState([])

  let gameWords = [];
  let words;
  let synonyms;
  let defaultWords =[
    "earth",
    "sun",
    "mars",
    "neptune",
    "venus",
    "uranus",
    "moon",
    "saturn",
    "mercury"
  ]
  let defaultQuestions=[
    "Which planet do you live on?",
    "Which planet is Earth's star?",
    "mars",
    "Which planet is furthest from the sun?",
    "Which planet spins clockwise?",
    "Which planet has 27 moons?",
    "What planet is Earth's moon?",
    "Which planet is known for it's rings?",
    "Which planet is the smallest in our galaxy?"
  ]

  let imgsrcs = [
    earth,
    sun,
    mars,
    neptune,
    venus,
    uranus,
    moonsmall,
    saturn,
    mercury

  ]

  //is being called in button function
  function gamePlay(target){  //if button choice is the right value, increase score, always change user, always change words and relog scores, and prompt next user.
    console.log(target.src)
    if (target.alt===winningValue[0]){
        setCorrect('true')
        props.history.push('/correct')
      } else if(target.alt!==winningValue[0]){
        setIncorrect('true')
        props.history.push('/incorrect')
    }
}

//add a function on click
const answerClick = (event) => {
  event.preventDefault()
  console.log('clicked')
  console.log(event.target)
  gamePlay(event.target)
};

//

function wordsValues(){ //creates array with words, for each round logs 4 random words into the array, using the index value of the word, matches the synonym, returns word, value and synonym into game words.
    gameWords = [];     //also finds a random synonym to create the synonym clue. logs values into buttons.
    for (let i = 0; i < 3; i ++){
    let word = words[Math.floor(Math.random()*words.length)];
    let index = words.indexOf(word);
    let synonym = synonyms[index];
    let imgsrc = imgsrcs[index]
    gameWords[i]=[word , index , synonym, imgsrc];
    console.log(gameWords)
    };
    
//buttons
    setButtonOne(gameWords[0]);
    setButtonTwo(gameWords[1]);
    setButtonThree(gameWords[2]);
    setWinningValue(gameWords[Math.floor(Math.random()*gameWords.length)])
};


  return (
    <div>
      <div className='play'>
        <img src={play} alt="play"/>
      </div>
      <div className='logo'>
        <a href="../"><img src={logo} alt="logo"/></a>
      </div>
      <div className='q1'>
        <h1 alt={winningValue[2]}>{winningValue[2]}</h1>
      </div>
      <div className='one' onClick={answerClick}>
        <img src={buttonOne[3]} alt={buttonOne[0]}/>
      </div>
      <div className='two' onClick={answerClick} >
        <img src={buttonTwo[3]} alt={buttonTwo[0]}/>
      </div>
      <div className='three' onClick={answerClick}>
        <img src={buttonThree[3]} alt={buttonThree[0]}/>
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