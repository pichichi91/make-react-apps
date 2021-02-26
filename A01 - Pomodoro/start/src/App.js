import React, { useRef, useState } from 'react';
import './App.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function App() {
  const MAX_TIME = 25 * 60;

  const [title, setTitle] = useState('Let the countdown begin:');
  const [timeLeft, setTimeLeft] = useState(MAX_TIME);
  const [isRunning, setIsRunning] = useState(false);

  const intervallRef = useRef(null);


  function startTimer() {
    if (intervallRef.current !== null) return;
    setTitle("You're doing great");
    setIsRunning(true);

    intervallRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft > 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervallRef.current === null) return;
    clearInterval(intervallRef.current);
    setTitle('Keep it up');
    intervallRef.current = null;
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervallRef.current);
    setTimeLeft(MAX_TIME);
    intervallRef.current = null;
    setIsRunning(false);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {isRunning ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
            <button onClick={startTimer}>Start</button>
          )}
        {timeLeft < MAX_TIME && <button onClick={resetTimer}>Reset</button>}
      </div>
    </div>
  );
}
