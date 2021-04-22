import React, { useState, useEffect } from 'react';
import './App.css';
import { PokemonCard } from './components/PokemonCard';
import shuffle from "lodash.shuffle"
// image for the pokemon
// https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png

const pokemon = [
  { id: 4, name: 'charizard' },
  { id: 10, name: 'caterpie' },
  { id: 77, name: 'ponyta' },
  { id: 108, name: 'lickitung' },
  { id: 132, name: 'ditto' },
  { id: 133, name: 'eevee' },
];

const doublePokemon = shuffle([...pokemon, ...pokemon])

export default function App() {

  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);


  const flip = (index) => {
    setMoves((moves) => moves + 1);

    setOpened((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (matched.length === pokemon.length) {
      alert("You've won")
      setOpened([])
      setMatched([])
    }

  }, [matched])

  useEffect(() => {

    if (opened.length < 2) return

    const firstPokemon = doublePokemon[opened[0]]
    const secondPokemon = doublePokemon[opened[1]]

    if (firstPokemon.name === secondPokemon.name) {
      setMatched(matched => [...matched, firstPokemon.id])
    }
  }, [opened])

  useEffect(() => {
    if (opened.length === 2) setTimeout(() => setOpened([]), 800);
  }, [opened])

  return <div className="app">
    <p>{moves} <strong>moves</strong></p>

    <div className="cards">
      {doublePokemon.map((poke, index) => {
        const isFlipped = opened.includes(index) || matched.includes(poke.id);


        return (
          <PokemonCard
            isFlipped={isFlipped}
            pokemon={poke}
            index={index}
            key={index}
            flipCard={flip} />

        )
      })}
    </div>
  </div>;
}
