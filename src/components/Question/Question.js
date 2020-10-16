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
import marstxt from './marstxt.png'
import q1 from './q001.png'

function Question(props) {

  useEffect(() =>{
    words=defaultWords;
    synonyms=defaultQuestions;
    wordsValues();
    console.log(words)
    console.log(synonyms)
    console.log(buttonOne)
  }, [] )

  const [buttonOne, setButtonOne] = useState()
  const [buttonTwo, setButtonTwo] = useState()
  const [buttonThree, setButtonThree] = useState()
  const [winningValue, setWinningValue] = useState([])
  const [correct, setCorrect] = useState()
  const [incorrect, setIncorrect] = useState()

  let gameWords = [];
  let words;
  let synonyms;
  let defaultWords =[
    "earth",
    "sun",
    "mars",
    "pluto",
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
    "Which planet is a dwarf planet?",
    "Which planet spins clockwise?",
    "Which planet has 27 moons?",
    "What planet is Earth's moon?",
    "Which planet is known for it's rings?",
    "Which planet is the smallest in our galaxy?"
  ]

  //is being called in button function
  function gamePlay(target){  //if button choice is the right value, increase score, always change user, always change words and relog scores, and prompt next user.
    if (target.textContent===winningValue[0]){
        setCorrect('true')
        props.history.push('/correct')
      } else if(target.textContent!==winningValue[0]){
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
    for (let i = 0; i < 4; i ++){
    let word = words[Math.floor(Math.random()*words.length)];
    let index = words.indexOf(word);
    let synonym = synonyms[index];
    gameWords[i]=[word , index , synonym];
    console.log(gameWords)
    };
    //synonym.textContent = (winningValue[2])
    
//buttons
    setButtonOne(gameWords[0][0]);
    setButtonTwo(gameWords[1][0]);
    setButtonThree(gameWords[2][0]);
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