import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import RulesModal from "./components/RulesModal"
import DifficultlyModal from "./components/DifficultlyModal";
import COLOURS from "./data.json"

function App() {
  const colourData = COLOURS.colours;
  const [scores, setScores] = useState({
    hasWon: false,
    currentScore: 0,
    highScore: 0
  });
  const [difficulty, setDifficulty] = useState("easy");
  const [choices, setChoices] = useState([]);
  const [cards, setCards] = useState(createColourCards());
  const [rulesOpen, setRulesOpen] = useState(false);
  const [difficultyOpen, setDifficultyOpen] = useState(false);

  useEffect(() => {
    setCards(createColourCards());
    setChoices([]);
  }, [difficulty]);

  useEffect(() => {
    if (choices.length === cards.length) {
      setScores((prev) => ({
        hasWon: true,
        currentScore: 0,
        highScore: prev.highScore > scores.currentScore ? prev.highScore : scores.currentScore,
      }));
    }
  }, [choices]);

  useEffect(() => {
    if (scores.hasWon) {
      setCards(createColourCards());
      setChoices([]);
    }
  }, [scores]);

  function createColourCards() {
    let colourAmount;
    if (difficulty === "easy") colourAmount = 5;
    if (difficulty === "medium") colourAmount = 10;
    if (difficulty === "hard") colourAmount = 20;
    const randomColours = [];
    const keys = Object.keys(colourData);

    while (randomColours.length < colourAmount) {
      const colour = colourData[keys[keys.length * Math.random() << 0]];
      if (randomColours.indexOf(colour) === -1) {
        randomColours.push(colour);
      }
    }
    return randomColours;
  }

  function shuffleCards() {
    const newCardOrder = [...cards];
    for (let i = newCardOrder.length - 1; i > 0; i--) {
      const randValue = Math.floor(Math.random() * i);
      const tempValue = newCardOrder[i];
      newCardOrder[i] = newCardOrder[randValue];
      newCardOrder[randValue] = tempValue;
    }
    setCards(newCardOrder);
  }

  function isAlreadyChosen(id) {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i] === id) {
        return true;
      }
    }
    return false; 
  }

  function handleCardClick(id) {
    const alreadyChosen = isAlreadyChosen(id);
    if (!alreadyChosen) {
      changeScore(!alreadyChosen);
      shuffleCards();
      setChoices([
        ...choices,
        id
      ])
      return;
    }
    if (alreadyChosen) {
      changeScore(!alreadyChosen);
      setCards(createColourCards());
      setChoices([]);
    }
  }

  function handleClickDiff(level) {
    setDifficulty(level);
    setScores(prevScores => ({
      hasWon: false,
      highScore: prevScores.highScore,
      currentScore: 0
    }));
    console.log(level);
  }

  function changeScore(correct) {
    if (correct) {
      const newScore = scores.currentScore + 1;
      setScores((prevScores) => ({
        hasWon: prevScores.hasWon,
        currentScore: newScore,
        highScore: prevScores.highScore < newScore 
          ? newScore 
          : prevScores.highScore 
      }));
    } else {
      setScores((prevScores) => ({
        hasWon: prevScores.hasWon,
        currentScore: 0,
        highScore: prevScores.highScore < prevScores.currentScore 
          ? prevScores.currentScore 
          : prevScores.highScore 
      }));
    }
  }

  function playAgain() {
    console.log("play again")
    setScores(prevScores => ({
      hasWon: false,
      currentScore: 0,
      highScore: prevScores.highScore
    }))
    setChoices([]);
  }

  function reset() {
    setScores({
      hasWon: false,
      currentScore: 0,
      highScore: 0
    });
    setChoices([]);
    setCards(createColourCards())
  }

  const renderCards = cards.map(color => {
    return <Card 
              color={color.hex}
              name={color.name}
              key={color.hex}
              handleCardClick={() => handleCardClick(color.hex)}
            />
  });

  return (
    <div>
    {
      rulesOpen &&
      <RulesModal 
          setOpen = {setRulesOpen}
      ></RulesModal>
    }
    {
      difficultyOpen && 
      <DifficultlyModal 
          setOpen = {setDifficultyOpen}
          handleClick = {handleClickDiff}
      ></DifficultlyModal>
    }
    <div className="container">
      <Header
        currentScore = {scores.currentScore}
        highScore = {scores.highScore}
        playAgain = {playAgain}
        rulesOpen = {setRulesOpen}
        difficultyOpen = {setDifficultyOpen}
        reset = {reset}
      />
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 rows-cols-lg-4 row-cols-xl-5'>
        {renderCards}
      </div>
    </div>
  </div>
  );
}

export default App;
