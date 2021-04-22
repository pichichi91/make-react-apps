import React from 'react';
const PokemonCard = ({ pokemon, isFlipped, index, flipCard }) => {

    const url = "https://pokeres.bastionbot.org/images/pokemon"

    const image = `${url}/${pokemon.id}.png`



    return (
        <button onClick={() => flipCard(index)} className={`pokemon-card ${isFlipped ? "flipped" : ''}`} >
            <div className="inner" >
                <div className="front" >
                    <img alt={pokemon.name} src={image} width="100" />

                </div>
                <div className="back" > ? </div>

            </div>
        </button>
    );
}
export { PokemonCard };