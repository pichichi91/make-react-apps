import React, { useCallback, useEffect, useState } from 'react';
import { useStopwatch } from "react-timer-hook";
import { useSpeechSynthesis } from 'react-speech-kit';

import './App.css';

export default function App() {
  const {
    seconds,
    isRunning,
    start,
    reset,
  } = useStopwatch();




  const { speak, speaking, supported, voices, cancel } = useSpeechSynthesis();

  const [timers, setTimers] = useState([
    { time: 2, text: "Hello" },
    { time: 5, text: "My Message" },
    { time: 9, text: "GoodBye" }
  ]);

  const doReset = useCallback(() => {
    reset()
    cancel()
  }, []);

  const doSpeak = useCallback((...props) => {
    speak(props)
  }, [])

  useEffect(() => {
    const foundTimers = timers.find((timer) => timer.time === seconds);

    if (foundTimers) doSpeak({ text: foundTimers.text })
    if (seconds > timers[timers.length - 1].time) doReset();

  }, [seconds, timers, doReset, doSpeak])




  function updateTimers(index, time, text) {

    const newTimers = [...timers]
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);

  }

  function addTimer() {
    setTimers([...timers, { time: 100, text: "" }]);


  }

  if (!supported) return (<div>Your Browser is not supported</div>)

  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <div className="timers">
        {/* timers go here */}

        {timers.map((timer, index) => (
          <TimerSlot updateTimers={updateTimers} key={index} index={index} timer={timer} />
        ))}


        <button className="add-button" onClick={addTimer}>Add</button>
      </div>

      {/* seconds */}
      <h2>{seconds}</h2>

      {/* buttons */}
      <div className="buttons">
        {!isRunning && <button className="start-button" onClick={start}>Start</button>}
        {isRunning && <button className="stop-button" onClick={reset}>Stop</button>}

        {speaking &&
          <p> I am speaking... </p>
        }
      </div>
    </div>
  );
}


function TimerSlot({ index, timer, updateTimers }) {

  const [time, setTime] = useState(timer.time);
  const [text, setText] = useState(timer.text);

  function handleBlur() {

    updateTimers(index, time, text);


  }

  return (<form className="timer" key={index}>
    <input type="number" value={time} onChange={(event) => setTime(+event.target.value)} />
    <input type="text" value={text} onChange={(event) => setText(event.target.value)} onBlur={handleBlur} />
  </form>)

}