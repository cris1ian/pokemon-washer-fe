import React from "react";
import { IPokemon } from "../models/pokemon";

interface PokemonItemProps {
  pokemon: IPokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  return (
    <div>
      <h3 className="capitalize font-bold text-m">{pokemon.name}</h3>
      <h3 className="capitalize font-bold text-m">{pokemon.id}</h3>
      <img src={pokemon.spriteUrl ?? undefined} alt={pokemon.name} />
    </div>
  );
};

export default PokemonItem;
