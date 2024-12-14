import React from 'react';
import { Pokemon } from '../types/pokemon';

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
};

export default PokemonItem;
