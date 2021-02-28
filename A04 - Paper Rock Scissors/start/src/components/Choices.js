import React, { Component } from 'react';
import choices from "./../data/choices";

export default function name({ computerChoice, setGameState, setWins, setLosses, setUserChoice }) {

    function handleUserChoice(choice) {
        const chosenChoice = choices.find(c => c.id === choice);
        setUserChoice(chosenChoice);
        if (chosenChoice.losesTo === computerChoice.id) {
            setGameState("lose")
            setLosses(losses => losses + 1)
        } else if (computerChoice.losesTo === chosenChoice.id) {
            setGameState("win")
            setWins(wins => wins + 1)


        } else if (computerChoice.id === chosenChoice.id) {
            setGameState("draw")
        }


    }
    return (
        <div className="choices">
            {/* choices captions */}
            <div>You</div>
            <div />
            <div>Computer</div>

            {/* buttons for my choice */}
            <div>
                {
                    choices.map((choice) => {
                        return (
                            <button key={choice.name} className={choice.name} onClick={() => handleUserChoice(choice.id)}>
                                {choice.component()}
                            </button>
                        )
                    })
                }
            </div>

            <div className="vs">vs</div>

            {/* show the computer's choice */}
            <div>
                <button className="computer-choice">?</button>
            </div>
        </div>
    );
}