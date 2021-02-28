import React, { Component } from 'react';

export default function name({ gameState, restartGame, computerChoice, userChoice }) {

    function renderComponent(choice) {
        if (choice === undefined) return null;
        const Component = choice.component;
        return <Component />
    }
    return (
        <>
            {gameState && (
                <div className={`game-state ${gameState}`} onClick={() => restartGame()}>
                    <div>
                        <div className="game-state-content">
                            <p>{renderComponent(userChoice)}</p>

                            {gameState === "win" && <p>Congrats! You win!</p>}
                            {gameState === "lose" && <p>Sorry! You lose!</p>}
                            {gameState === "draw" && <p> You draw!</p>}


                            <p>{renderComponent(computerChoice)}</p>

                        </div>
                        <button>Play again</button>
                    </div>
                </div>
            )
            }
        </>

    );
}