import React, { useEffect } from 'react';
import './App.css';
import useMovement from './useMovement';
import useRef from "./useRef"

export default function App() {

  const { canvasRef, linkDownRef, linkUpRef, linkLeftRef, linkRightRef } = useRef();
  const { x, y, move, direction } = useMovement();

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;

  }, [canvasRef])

  useEffect(() => {
    function getImage() {
      if (direction === "down") return linkDownRef;
      if (direction === "up") return linkUpRef;
      if (direction === "left") return linkLeftRef;
      if (direction === "right") return linkRightRef;
    }

    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)

    const linkImage = getImage().current
    context.drawImage(linkImage, x, y);

  }, [x, y, direction, canvasRef, linkDownRef, linkUpRef, linkLeftRef, linkRightRef])


  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => move("up")} >Up</button>
        <button onClick={() => move("left")}>Left</button>
        <button onClick={() => move("down")}>Down</button>
        <button onClick={() => move("right")}>Right</button>
      </div>

      <div className="images">
        <img ref={linkDownRef} src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img ref={linkRightRef} src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img ref={linkUpRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img ref={linkLeftRef} src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}
