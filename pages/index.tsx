import React from 'react';
import PokemonList from '../app/components/PokemonList';

const Home = () => {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  return (
    <div>
      <h1>Pokémon List</h1>
      <PokemonList apiUrl={apiUrl} />
    </div>
  );
};

export default Home;
