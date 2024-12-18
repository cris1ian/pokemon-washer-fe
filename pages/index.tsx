import React from "react";
import PokemonList from "../src/components/PokemonList";

export default function Home () {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/pokemon`;

  return (
    <div>
      <h1>Pokémon List</h1>
      <PokemonList apiUrl={apiUrl} />
    </div>
  );
};

