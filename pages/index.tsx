import React from "react";
import PokemonList from "../src/components/PokemonList";

export default function Home () {
  return (
    <div>
      <h1 className="text-6xl text-center mb-9">Pokémon List</h1>
      <PokemonList/>
    </div>
  );
};

