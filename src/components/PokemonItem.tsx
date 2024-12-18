import React from "react";
import { Pokemon } from "../models/pokemon";

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  console.log({ pokemon });
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
    </div>
  );
};

export default PokemonItem;
