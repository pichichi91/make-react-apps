import React from 'react';
import { useDrop } from 'react-dnd'

const Spot = ({ type, value, spot, handleDrop }) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: type,
        drop: item => {
            handleDrop(spot, item)
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: monitor.canDrop()
        })

    }))

    let backgroundColor = "#f2f2f2";
    if (canDrop) backgroundColor = "#3db897"
    if (isOver) backgroundColor = "#4bdcb5"

    return (
        <div className="spot" ref={drop} style={{ backgroundColor }}>{value} </div>

    )
}

export { Spot };