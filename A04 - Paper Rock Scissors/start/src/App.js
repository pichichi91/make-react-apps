import React, { useEffect, useState } from 'react';

import './App.css';

import StatusDisplay from './components/StatusDisplay';
import Choices from './components/Choices';
import GameStats from "./components/GameStats";

import choices from "./data/choices";

// 

export default function App() {

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    restartGame();

  }, []);

  function restartGame() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice);
    setGameState(null);
    setUserChoice(null);
  }



  return (
    <div className="app">
      {/* wins vs losses stats */}
      <StatusDisplay wins={wins} losses={losses} />
      <GameStats userChoice={userChoice} gameState={gameState} restartGame={restartGame} />
      <Choices computerChoice={computerChoice} setGameState={setGameState} setWins={setWins} setLosses={setLosses} setUserChoice={setUserChoice} />
    </div >
  );
}
