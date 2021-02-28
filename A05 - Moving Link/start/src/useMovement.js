import { useState, useEffect } from 'react';

export default function useMovement() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [direction, setDirection] = useState("down");

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        function handleKeyDown(event) {
            if (event.key === "ArrowDown") move("down");
            if (event.key === "ArrowUp") move("up")
            if (event.key === "ArrowLeft") move("left")
            if (event.key === "ArrowRight") move("right")
        }
        return () => window.removeEventListener("keydown", handleKeyDown);

    }, [])

    function move(enteredDirection) {

        setDirection(enteredDirection)
        if (enteredDirection === "down") {
            setY((y) => y + 20);
        }
        if (enteredDirection === "up") {
            setY((y) => y - 20);
        }
        if (enteredDirection === "left") {
            setX((x) => x - 20);
        }
        if (enteredDirection === "right") {
            setX((x) => x + 20);
        }

    }
    return { x, y, direction, move, };
}